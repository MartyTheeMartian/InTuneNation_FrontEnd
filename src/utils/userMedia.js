import teoria from 'teoria';
import PitchAnalyzer from '../../pitch-js/pitch.js';
import store from '../store';

var getUserMedia = require('get-user-media-promise');
var MicrophoneStream = require('microphone-stream');
const {dispatch, getState} = store;

export default getUserMedia({ video: false, audio: true })
  .then(function(stream) {
    console.log(stream);
    var opts = {
      // objectMode: true,
      bufferSize: 4096
     };
    var micStream = new MicrophoneStream(stream, opts);
    // micStream.opts.objectMode = true;
    console.log(micStream);
    // get Buffers (Essentially a Uint8Array DataView of the same Float32 values)
    var freqArray = [];
    micStream.on('data', function(chunk) {

      if (!getState().recordingStatusReducer) {
        return;
      } else {
        // Optionally convert the Buffer back into a Float32Array
        // (This actually just creates a new DataView - the underlying audio data is not copied or modified.)
        var raw = MicrophoneStream.toRaw(chunk);
        var pitch = new PitchAnalyzer(44100);
        // console.log(chunk);
        pitch.input(raw);
        pitch.process();
        var tone = pitch.findTone();
        if (tone) {
          var freq = tone.freq,
          db = tone.db,
          note = getNote(freq),
          greenTimeAccumulated = getState().greenTime.accumulated,
          targetNote = getState().targetNote;




          console.log(getPreciseNotePlusCentDiffPlusFreq(freq)); //dispatch to the store //As singing, get guage to reflect where you are in RGY
          // get targetNote
          // read it dynamically
          // hold for timeRequirement
          // if (teoria.note.fromKey(Math.round(note)).name()==='c') {
          //   freqArray.push(freq);
          // // }
          // if (freqArray.length===10) {
          //   var newArr = [];
          //   var sum = freqArray.reduce((sum, item) => { return sum + item });
          //   newArr.push(sum/freqArray.length);
          //   freqArray = newArr;
          //   // console.log('avg of ten:', getPreciseNotePlusCentDiffPlusFreq(freqArray[0]));
          //   freqArray = [];
          // }
          // console.log('freqArray', freqArray);
          // console.log(teoria.note(teoria.note.fromFrequency(Math.round(freq)[note])).name());
        }

        function getNote(frequency, reference) {
          if (!frequency) return null;
          reference = reference || 440;
          return 69 + 12 * Math.log(frequency / reference) / Math.LN2;
        }

        //dispatch an action to record captured info
      };


    // or pipe it to another stream
    // micStream.pipe(micInput);
//
    // It also emits a format event with various details (frequency, channels, etc)
    micStream.on('format', function(format) { console.log(format) });
  }).catch(function(error) {
    console.log(error);
  });
});

function getName(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).name(); }
function getAccidental(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).accidental(); }
function getOctave(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).octave(); }
function getNameAccidental(frequency) { return [getName(frequency), getAccidental(frequency)].join(''); }
function getNameAccidentalOctave(freq) { return [getName(freq), getAccidental(freq), getOctave(freq)].join(''); }
function getCentDiff(freq) { return teoria.note.fromFrequency(freq).cents }
function getNotePlusCentDiff(frequency) { return [getNameAccidental(frequency), getCentDiff(frequency)]; }
function getPreciseNotePlusCentDiff(frequency) { return [getNameAccidentalOctave(frequency), getCentDiff(frequency)]; }
function getPreciseNotePlusCentDiffPlusFreq(freq) {
  const result = getPreciseNotePlusCentDiff(freq);
  return result.concat(freq);
}
// function centDiffInGreen(cD) { return (cD<-40 && cD>40); }
// function centDiffInYellow(cD) { return ((cD > -40 && cD < -15) || (cD < 40 && cD > 15)); }
// function centDiffInRed(cD) { return (cD > -15 && cD < 15); }
