import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import teoria from 'teoria';
import PitchAnalyzer from '../../../../vendors/pitch-js/src/pitch.js';
import { pushNoteToArray,
        //  activateMicrophoneInput,
         startAudioCapture,
         stopAudioCapture,
       } from '../../actions';

var getUserMedia = require('get-user-media-promise');
var MicrophoneStream = require('microphone-stream');

const mapStateToProps = (state, ownProps) => {
  return ({
    keyStrokeEvents: state.keyStrokeEvents,
    vocalInputResults: state.vocalInputResults,
    exerciseScores: state.exerciseScores,
    greenTime: state.greenTime,
    targetNote: state.targetNote,
    targetNoteIndex: state.targetNoteIndex,
    sungNote: state.sungNote,
    recordingStatus: state.recordingStatus
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({pushNoteToArray, startAudioCapture, stopAudioCapture}, dispatch);
};

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

for (var i=220; i<=440; i++) {
  console.log(getPreciseNotePlusCentDiffPlusFreq(i));
}

function centDiffInGreen(cD) { return (cD<-40 && cD>40); }
function centDiffInYellow(cD) { return ((cD > -40 && cD < -15) || (cD < 40 && cD > 15)); }
function centDiffInRed(cD) { return (cD > -15 && cD < 15); }
let initialScore = 100;
let bigReduction = 0.5;
let smallReduction = 0.25;
const greenTimeRequirement = 500;

class TuningIndicator extends Component {
  constructor() {
    super();
  }

  function activateMicrophoneInput() {
    getUserMedia({ video: false, audio: true })
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
        let scores = [];
        let targetNote = this.props.currentTargetNote;
        let score = initialScore;
        micStream.on('data', function(chunk) {
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
                note = getNote(freq);

            let currentNoteSung = getNameAccidental(freq);
            let red = (targetNote) => { return ((currentNoteSung !== targetNote) || (centDiffInRed(getCentDiff(freq)))) }

            if (this.props.recordingStatus === true) {
              if ( (time === timeRequirement) && (targetNoteSuccession.index() === keyEventResults.length ) ) {
                /**/
                // record score to currentExerciseScores
                // currentExerciseScores posted to DB w/ API
                // set recordingStatus to false w/ state
                // set null to { currentTargetNote, currentNoteSung, currentExerciseScores, currentScore, targetNoteSuccession }
              }
              else if (greenTime === greenTimeRequirement) { greenTime++; }
              else if (red(this.props.targetNote)) { score -= bigReduction; }
              else if (centDiffInYellow(getCentDiff(freq))) { score -= smallReduction; }
            }

            console.log(getPreciseNotePlusCentDiffPlusFreq(freq));
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

          // note: if you set options.objectMode=true, the `data` event will output AudioBuffers instead of Buffers
         });

        // or pipe it to another stream
        // micStream.pipe(micInput);

        // It also emits a format event with various details (frequency, channels, etc)
        micStream.on('format', function(format) {
          console.log(format);
        });

        // Stop when ready
        // document.getElementById('my-stop-button').onclick = function() {
        //   micStream.stop();
        // };
      }).catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        {activateMicrophoneInput()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TuningIndicator);
