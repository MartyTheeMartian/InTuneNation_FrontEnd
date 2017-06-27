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
          greenWithParams,
          yellowWithParams,
          redWithParams,
          FreqConversion,
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
        // remove currentPianoNote at beginning of exercise
        if (getState().currentPianoNoteReducer !== '') { dispatch(removePianoNote()); }
        // define our target note
        const keyEvents = getState().keyEventsReducer;
        const targetNoteIndex = getState().targetNoteIndexReducer;
        dispatch(setKeyEventAsTargetNote(keyEvents[targetNoteIndex]));
        const targetNote = getState().targetNoteReducer;
        // define our fq
        const freq = tone.freq;
        const tuningSpecs = getState().tuningSpecsReducer;
        const singing = new FreqConversion(freq, tuningSpecs, targetNote.tNote);
        console.log(singing);
        // correctly calibrate meter arrow for flat, sharp, or approximate readings
        let offset;
        if (singing.keyNum < targetNote.keyNum) { offset = -50; }
        else if (singing.keyNum > targetNote.keyNum) { offset = 50; }
        else { offset = singing.centDiff; }
        const arrowValue = ((180 * ((offset + 50) / 100)) / 180);
        // define & set sungNote
        const sungNote = {
          frequency: singing.fq,
          name: singing.note,
          centDiff: singing.centDiff,
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
          if (singing.inTune) {
            dispatch(incrementGreenTime());
          } else {
            if (singing.somewhatInTune) {
              dispatch(decrementScore(0.75));
            } else if (singing.outOfTune) {
              dispatch(decrementScore(1.25));
            }
          }
          // if (greenWithParams(targetNoteName, sungNoteName, freq, tuningSpecs.greenYellowBand)) {
          //   dispatch(incrementGreenTime());
          // } else {
          //   // dispatch(resetGreenTime());
          //   if (redWithParams(targetNoteName, sungNoteName, freq, tuningSpecs.redYellowBand)) {
          //     dispatch(decrementScore(1.25));
          //   } else if (yellowWithParams(targetNoteName, sungNoteName, freq, tuningSpecs.redYellowBand, tuningSpecs.greenYellowBand)) {
          //     dispatch(decrementScore(.75));
          //   }
          // }
        }
        // console.log(getPreciseNotePlusCentDiffPlusFreq(freq));
      }
    });
  });
