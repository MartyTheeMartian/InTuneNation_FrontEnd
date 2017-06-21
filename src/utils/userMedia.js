import PitchAnalyzer from '../../pitch-js/pitch';
import store from '../store';

import { setKeyEventAsTargetNote,
          incrementGreenTime,
          resetGreenTime,
          decrementScore,
          resetScore,
          incrementTargetNoteIndex,
          exerciseFinished,
          pushScoreToExerciseScoresArray,
          setSungNote,
          toggleAudioCapture,
          removePianoNote,
         } from '../actions';
import { getName,
          getAccidental,
          getOctave,
          getNameAccidentalOctave,
          getKeyNum,
          getCentDiff,
          getPreciseNotePlusCentDiffPlusFreq,
          centDiffInYellow,
          centDiffInGreen,
          green,
          yellow,
          red,
          greenWithParams,
          yellowWithParams,
          redWithParams,
        } from './teoria_helpers';
import scorePostingUtility from './score_posting_utility';

const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');

const { dispatch, getState } = store;

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
        const arrowValue = ((180 * ((offset + 50) / 100)) / 180);
        // define & set sungNote
        const sungNote = {
          frequency: freq,
          name: getNameAccidentalOctave(freq),
          centDiff: getCentDiff(freq),
          arrowValue,
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
            dispatch(exerciseFinished());
          } else {
            dispatch(resetGreenTime());
            dispatch(resetScore());
            dispatch(incrementTargetNoteIndex());
          }
        } else {
          const tuningSpecs = getState().tuningSpecsReducer;
          if (greenWithParams(targetNoteName, sungNoteName, freq, tuningSpecs.greenYellowBand)) {
            dispatch(incrementGreenTime());
          } else {
            // dispatch(resetGreenTime());
            if (redWithParams(targetNoteName, sungNoteName, freq, tuningSpecs.redYellowBand)) {
              dispatch(decrementScore(1.25));
            } else if (yellowWithParams(targetNoteName, sungNoteName, freq, tuningSpecs.redYellowBand, tuningSpecs.greenYellowBand)) {
              dispatch(decrementScore(.75));
            }
          }
        }
        // console.log(getPreciseNotePlusCentDiffPlusFreq(freq));
      }
    });
  });
