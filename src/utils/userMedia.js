import teoria from 'teoria';
import PitchAnalyzer from '../../pitch-js/pitch';
import store from '../store';

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

const green = (targetNoteNames, sungNote, fq) => {
  return (centDiffInGreen(getCentDiff(fq)) && targetNoteNames.includes(sungNote.name));
};

const yellow = (targetNoteNames, sungNote, fq) => {
  return (centDiffInYellow(getCentDiff(fq)) && targetNoteNames.includes(sungNote.name));
};

const red = (targetNoteNames, sungNote, fq) => {
  return !targetNoteNames.includes(sungNote.name) ? true : centDiffInRed(getCentDiff(fq));
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
      // console.log(chunk);
      pitch.input(raw);
      pitch.process();
      const tone = pitch.findTone();
      if (tone) {
        const freq = tone.freq;
        const sungNote = {
          frequency: freq,
          name: getNameAccidental(freq),
          centDiff: getCentDiff(freq),
        };
        dispatch(setSungNote(sungNote));
        // // const db = tone.db;
        // // const note = getNote(freq);
        // const state = getState();
        // const keyStrokeEvents = state.keyStrokeEventsReducer;
        // const targetNoteIndex = state.targetNoteIndexReducer;
        // dispatch(setKeyEventAsTargetNote(keyStrokeEvents[targetNoteIndex]))
        // const targetNoteNames = state.targetNoteReducer.noteNamesArray;
        // // const targetNoteWithAccidental = state.targetNote
        // // const green = (fq, targetNote) => {
        // //   return (tar)
        // // }
        // // const greenTime = state.greenTime;
        // // const targetNote = state.targetNote;
        // // const exerciseScores = state.exerciseScores;
        // // const keyStrokeEvents = stat
        //
        // if (state.greenTime.accumulated !== state.greenTime.required) {
        //   dispatch(pushScoreToExerciseScoresArray());
        //   if (state.exerciseScores.length === state.keyStrokeEvents.length) {
        //     // POST SCORES TO DB
        //     dispatch(resetTargetNoteIndex());
        //     dispatch(toggleAudioCapture());
        //   } else {
        //     dispatch(resetGreenTime());
        //     dispatch(resetScore());
        //     dispatch(incrementTargetNoteIndex());
        //   }
        // } else {
        //   if (!green(targetNoteNames, sungNote, freq)) {
        //     dispatch(resetGreenTime());
        //     if (red(targetNoteNames, sungNote, freq)) {
        //       dispatch(decrementScore(5));
        //     } else if (yellow(freq)) {
        //       dispatch(decrementScore(0.25));
        //     }
        //   } else {
        //     dispatch(incrementGreenTime());
        //   }
        // }

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
