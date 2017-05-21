import teoria from 'teoria';
import axios from 'axios';
import PitchAnalyzer from '../../pitch-js/pitch';
import store from '../store';

import { setKeyEventAsTargetNote,
          incrementGreenTime,
          resetGreenTime,
          decrementScore,
          resetScore,
          incrementTargetNoteIndex,
          resetTargetNoteIndex,
          // setAllPastExercises,
          pushScoreToExerciseScoresArray,
          // pushExerciseToProfileHistory,
          setSungNote,
          toggleAudioCapture,
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
function getCentDiff(freq) { return teoria.note.fromFrequency(freq).cents; }
function getPreciseNotePlusCentDiff(frequency) { return [getNameAccidentalOctave(frequency), getCentDiff(frequency)]; }
function getPreciseNotePlusCentDiffPlusFreq(freq) {
  const result = getPreciseNotePlusCentDiff(freq);
  return result.concat(freq);
}
function centDiffInRed(cD) { return (cD < -40 && cD > 40); }
function centDiffInYellow(cD) { return ((cD > -40 && cD < -15) || (cD < 40 && cD > 15)); }
function centDiffInGreen(cD) { return (cD > -15 && cD < 15); }

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
    return centDiffInRed(getCentDiff(fq));
  }
};

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
        const freq = tone.freq;
        const sungNote = {
          frequency: freq,
          name: getNameAccidentalOctave(freq),
          centDiff: getCentDiff(freq),
          arrowValue: ((180*((getCentDiff(freq) + 50)/100))/180),
        };
        dispatch(setSungNote(sungNote));
        const keyEvents = getState().keyEventsReducer;
        const targetNoteIndex = getState().targetNoteIndexReducer;
        dispatch(setKeyEventAsTargetNote(keyEvents[targetNoteIndex]));
        const targetNoteName = getState().targetNoteReducer.tNote;
        const sungNoteName = getState().sungNoteReducer.name;
        const greenTime = getState().greenTimeReducer;
        if (greenTime.accumulated === greenTime.required) {
          const scoreToAdd = getState().scoreReducer;
          dispatch(pushScoreToExerciseScoresArray(scoreToAdd));
          if (getState().exerciseScoresReducer.length === keyEvents.length) {
            // POST SCORES TO DB
            const userId = getState().loginReducer.id;
            const exerciseId = getState().currentExerciseIdReducer.id;
            const finalScoreArray = getState().exerciseScoresReducer;
            scorePostingUtility(userId, exerciseId, finalScoreArray);
            dispatch(resetTargetNoteIndex());
            dispatch(toggleAudioCapture());
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
              dispatch(decrementScore(5));
            } else if (yellow(targetNoteName, sungNoteName, freq)) {
              dispatch(decrementScore(2));
            }
          }
        }
        // console.log(getPreciseNotePlusCentDiffPlusFreq(freq));
      }
    }).catch((error) => {
      console.log(error);
    });
  });
