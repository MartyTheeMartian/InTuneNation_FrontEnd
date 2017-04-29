import teoria from 'teoria';
import PitchAnalyzer from '../../pitch-js/pitch';
import store from '../store';
import ReactGauge from 'react-gauge-capacity';

import { setKeyEventAsTargetNote,
          incrementGreenTime,
          resetGreenTime,
          decrementScore,
          resetScore,
          incrementTargetNoteIndex,
          resetTargetNoteIndex,
          pushScoreToExerciseScoresArray,
          setSungNote,
          toggleAudioCapture,
         } from '../actions';

const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');

const { dispatch, getState, } = store;

function getName(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).name(); }
function getAccidental(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).accidental(); }
function getOctave(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).octave(); }
function getNameAccidental(frequency) { return [getName(frequency), getAccidental(frequency)].join(''); }
function getNameAccidentalOctave(freq) { return [getName(freq), getAccidental(freq), getOctave(freq)].join(''); }
function getCentDiff(freq) { return teoria.note.fromFrequency(freq).cents; }
function getNotePlusCentDiff(frequency) { return [getNameAccidental(frequency), getCentDiff(frequency)]; }
function getPreciseNotePlusCentDiff(frequency) { return [getNameAccidentalOctave(frequency), getCentDiff(frequency)]; }
function getPreciseNotePlusCentDiffPlusFreq(freq) {
  const result = getPreciseNotePlusCentDiff(freq);
  return result.concat(freq);
}
function centDiffInGreen(cD) { return (cD<-40 && cD>40); }
function centDiffInYellow(cD) { return ((cD > -40 && cD < -15) || (cD < 40 && cD > 15)); }
function centDiffInRed(cD) { return (cD > -15 && cD < 15); }

const green = (targetNoteName, sungNoteName, fq) => {
  return (centDiffInGreen(getCentDiff(fq)) && targetNoteName === sungNoteName);
};

const yellow = (targetNoteName, sungNoteName, fq) => {
  return (centDiffInYellow(getCentDiff(fq)) && targetNoteName === sungNoteName);
};

const red = (targetNoteName, sungNoteName, fq) => {
  return (!targetNoteName === sungNoteName) ? true : centDiffInRed(getCentDiff(fq));
};


export default getUserMedia({ video: false, audio: true })
  .then((stream) => {
    const opts = { bufferSize: 4096 };
    const micStream = new MicrophoneStream(stream, opts);
    // get Buffers (Essentially a Uint8Array DataView of the same Float32 values)
    micStream.on('data', (chunk) => {
      if (!getState().recordingStatusReducer) {
        return;
      }
      // Optionally convert the Buffer back into a Float32Array
      // ( This actually just creates a new DataView -
      // the underlying audio data is not copied or modified.)
      const raw = MicrophoneStream.toRaw(chunk);
      const pitch = new PitchAnalyzer(44100);
      pitch.input(raw);
      pitch.process();
      const tone = pitch.findTone();
      if (tone) {
        const freq = tone.freq;
        const sungNote = {
          frequency: freq,
          name: getNameAccidentalOctave(freq),
          centDiff: getCentDiff(freq),
          arrowValue: ((180*((getCentDiff(freq) + 50)/100))/180),
        };
        dispatch(setSungNote(sungNote));
        // const db = tone.db;
        // const note = getNote(freq);
        const keyEvents = getState().keyEventsReducer;
        const targetNoteIndex = getState().targetNoteIndexReducer;
        dispatch(setKeyEventAsTargetNote(keyEvents[targetNoteIndex]))
        // const targetNoteNames = state.targetNoteReducer.noteNamesArray;
        const targetNoteName = getState().targetNoteReducer.tNote;
        const sungNoteName = getState().sungNoteReducer.name;
        console.log(sungNoteName);
        const greenTime = getState().greenTimeReducer;
        // const exerciseScores = state.exerciseScores;
        // // const keyStrokeEvents = stat
        console.log(getState().scoreReducer);
        if (greenTime.accumulated === greenTime.required) {
          const finalScore = getState().scoreReducer;
          dispatch(pushScoreToExerciseScoresArray(finalScore));
          // if (getState().exerciseScoresReducer.length === keyEvents.length) {
          //   // POST SCORES TO DB
          //   dispatch(resetTargetNoteIndex());
          //   dispatch(toggleAudioCapture());
          // } else {
          //   dispatch(resetGreenTime());
          //   dispatch(resetScore());
          //   dispatch(incrementTargetNoteIndex());
          // }
        } else {
          if (green(targetNoteName, sungNoteName, freq)) {
            dispatch(incrementGreenTime());
            console.log(getState().greenTime.accumulated);
          } else {
            dispatch(incrementGreenTime());
            if (red(targetNoteName, sungNoteName, freq)) {
              dispatch(decrementScore(5));
            } else if (yellow(targetNoteName, sungNoteName, freq)) {
              dispatch(decrementScore(2.5));
            }
          }
        }

 // dispatch to the store //As singing, get guage to reflect where you are in RGY
        console.log(getPreciseNotePlusCentDiffPlusFreq(freq));
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

        // function getNote(frequency, reference) {
        //   if (!frequency) return null;
        //   reference = reference || 440;
        //   return 69 + 12 * Math.log(frequency / reference) / Math.LN2;
        // }

        // dispatch an action to record captured info
      }


    // or pipe it to another stream
    // micStream.pipe(micInput);
    }).catch((error) => {
      console.log(error);
    });
  });
