import teoria from 'teoria';
import PitchAnalyzer from '../../pitch-js/pitch';
import store from '../store';

import { setKeyEventAsTargetNote,
          incrementGreenTime,
          resetGreenTime,
          decrementScore,
          resetScore,
          incrementTargetNoteIndex,
          resetInterface,
          pushScoreToExerciseScoresArray,
          setSungNote,
          toggleAudioCapture,
          removePianoNote,
         } from '../actions';
import scorePostingUtility from './score_posting_utility';

const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');

const { dispatch, getState } = store;

// TEORIA HELPERS
function getName(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).name(); }
function getAccidental(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).accidental(); }
function getOctave(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).octave(); }
function getNameAccidentalOctave(freq) { return [getName(freq), getAccidental(freq), getOctave(freq)].join(''); }
function getKeyNum(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).key() }
function getCentDiff(freq) { return teoria.note.fromFrequency(freq).cents; }
function getPreciseNotePlusCentDiff(frequency) { return [getNameAccidentalOctave(frequency), getCentDiff(frequency)]; }
// function getPreciseNotePlusCentDiffPlusFreq(freq) {
//   const result = getPreciseNotePlusCentDiff(freq);
//   return result.concat(freq);
// }
// function centDiffInRed(cD) { return (cD < -40 && cD > 40); }
function centDiffInYellow(cD)  { return ((cD > -50 && cD < -3) || (cD < 50 && cD > 3)); }
function centDiffInGreen(cD) { return (cD > -3 && cD < 3); }

const green = (targetNoteName, sungNoteName, fq) => {
  return (centDiffInGreen(getCentDiff(fq)) && targetNoteName === sungNoteName);
};

const yellow = (targetNoteName, sungNoteName, fq) => {
  return (centDiffInYellow(getCentDiff(fq)) && targetNoteName === sungNoteName);
};

const red = (targetNoteName, sungNoteName, fq) => {
  if (targetNoteName !== sungNoteName) {
    return true;
  } else {
    return false;
  //  return centDiffInRed(getCentDiff(fq));
  }
};

const noteIsUnder = (keyNum, fq) => {

}
// MICROPHONE INPUT CODE
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
        // define our fq
        const freq = tone.freq;
        // remove currentPianoNote at beginning of exercise
        if (getState().currentPianoNoteReducer !== '') { dispatch(removePianoNote()); }
        // define our target note
        const keyEvents = getState().keyEventsReducer;
        const targetNoteIndex = getState().targetNoteIndexReducer;
        dispatch(setKeyEventAsTargetNote(keyEvents[targetNoteIndex]));
        const targetNote = getState().targetNoteReducer;
        // correctly calibrate meter arrow for flat, sharp, or approximate readings
        let offset;
        if (getKeyNum(freq) < targetNote.keyNum) { offset = -50; }
        else if (getKeyNum(freq) > targetNote.keyNum) { offset = 50; }
        else { offset = getCentDiff(freq); }
        let arrowValue = ((180 * ((offset + 50) / 100)) / 180);
        // define & set sungNote
        const sungNote = {
          frequency: freq,
          name: getNameAccidentalOctave(freq),
          centDiff: getCentDiff(freq),
          arrowValue: arrowValue,
        };
        dispatch(setSungNote(sungNote));
        const targetNoteName = targetNote.tNote;
        const sungNoteName = getState().sungNoteReducer.name;
        const greenTime = getState().greenTimeReducer;
        if (greenTime.accumulated === greenTime.required) {
          const scoreToAdd = getState().scoreReducer;
          dispatch(pushScoreToExerciseScoresArray(scoreToAdd));
          if (getState().exerciseScoresReducer.length === keyEvents.length) {
            // POST SCORES TO DB
            const userId = parseInt(localStorage.getItem('userId'), 10);
            const exerciseId = getState().currentExerciseIdReducer.id;
            const finalScoreArray = getState().exerciseScoresReducer;
            scorePostingUtility(userId, exerciseId, finalScoreArray);
            dispatch(resetInterface());
          } else {
            dispatch(resetGreenTime());
            dispatch(resetScore());
            dispatch(incrementTargetNoteIndex());
          }
        } else {
          if (green(targetNoteName, sungNoteName, freq)) {
            dispatch(incrementGreenTime());
          } else {
            // dispatch(resetGreenTime());
            if (red(targetNoteName, sungNoteName, freq)) {
              dispatch(decrementScore(1.5));
            } else if (yellow(targetNoteName, sungNoteName, freq)) {
              dispatch(decrementScore(.5));
            }
          }
        }
        // console.log(getPreciseNotePlusCentDiffPlusFreq(freq));
      }
    });
  });
