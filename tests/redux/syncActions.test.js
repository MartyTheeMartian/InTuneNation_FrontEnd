import {
  currentPianoNote,
  removePianoNote,
  pushKeyEventToArray,
  toggleCapture,
  shiftOctaves,
  toggleAudioCapture,
  incrementGreenTime,
  resetGreenTime,
  changeGreenTimeRequirement,
  decrementScore,
  resetScore,
  setKeyEventAsTargetNote,
  setSungNote,
  incrementTargetNoteIndex,
  resetInterface,
  pushScoreToExerciseScoresArray,
  singButton,
  resetState,
} from '../../src/actions';

import getKeyNum from '../../src/audio/keyNumGenerator';
import { getNameAccidentalOctave, getCentDiff } from '../../src/utils/freq_conversion';

const noteObj = () => {
  const note = 'C';
  const octave = 3;
  const keyNum = getKeyNum(note, octave).keyNum;
  const tNote = getKeyNum(note, octave).tNote;
  const noteObject = {
    noteName: note,
    octave,
    keyNum,
    tNote,
  };
  return noteObject;
};

describe('synchronous actions', () => {
  describe('currentPianoNote', () => {
    it('should return the name of the note that was clicked on the keyboard', () => {
      const note = 'C';
      const expectedAction = {
        type: 'CURRENT_PIANO_NOTE',
        payload: note,
      };
      expect(currentPianoNote(note)).toEqual(expectedAction);
    });
  });

  describe('removePianoNote', () => {
    it('should return the expected action', () => {
      const expectedAction = {
        type: 'REMOVE_PIANO_NOTE',
      };
      expect(removePianoNote()).toEqual(expectedAction);
    });
  });

  describe('pushKeyEventToArray', () => {
    it('should properly add the piano key that was clicked into the keyEvents queue', () => {
      const payload = noteObj();
      const expectedAction = {
        type: 'ADD_KEY_EVENT',
        payload,
      };
      expect(pushKeyEventToArray(payload)).toEqual(expectedAction);
    });
  });

  describe('toggleCapture', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'TOGGLE_CAPTURE' };
      expect(toggleCapture()).toEqual(expectedAction);
    });
  });

  describe('shiftOctaves', () => {
    it('should return the expected action when the direction is *up*', () => {
      const direction = '+';
      const expectedAction = {
        type: 'SHIFT_OCTAVES',
        payload: direction,
      };
      expect(shiftOctaves(direction)).toEqual(expectedAction);
    });

    it('should return the expected action when the direction is *down*', () => {
      const direction = '-';
      const expectedAction = {
        type: 'SHIFT_OCTAVES',
        payload: direction,
      };
      expect(shiftOctaves(direction)).toEqual(expectedAction);
    });
  });

  describe('toggleAudioCapture', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'TOGGLE_AUDIO_CAPTURE' };
      expect(toggleAudioCapture()).toEqual(expectedAction);
    });
  });

  describe('incrementGreenTime', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'INCREMENT_GREEN_TIME' };
      expect(incrementGreenTime()).toEqual(expectedAction);
    });
  });

  describe('resetGreenTime', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'RESET_GREEN_TIME' };
      expect(resetGreenTime()).toEqual(expectedAction);
    });
  });

  describe('changeGreenTimeRequirement', () => {
    it('should return the expected action', () => {
      const amount = 5;
      const expectedAction = {
        type: 'CHANGE_GREEN_TIME_REQUIREMENT',
        amount,
      };
      expect(changeGreenTimeRequirement(5)).toEqual(expectedAction);
    });
  });

  describe('decrementScore', () => {
    it('should return the expected action', () => {
      const amount = 2;
      const expectedAction = {
        type: 'DECREMENT_SCORE',
        amount,
      };
      expect(decrementScore(2)).toEqual(expectedAction);
    });
  });

  describe('resetScore', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'RESET_SCORE' };
      expect(resetScore()).toEqual(expectedAction);
    });
  });

  describe('setKeyEventAsTargetNote', () => {
    it('should return the expected action', () => {
      const payload = noteObj();
      const expectedAction = {
        type: 'SET_KEY_EVENT_AS_TARGET_NOTE',
        payload,
      };
      expect(setKeyEventAsTargetNote(payload)).toEqual(expectedAction);
    });
  });

  describe('setSungNote', () => {
    it('should return the expected action with a payload', () => {
      const sN1 = () => {
        const freq = 441;
        const arrowValue = ((180 * ((getCentDiff(freq) + 50) / 100)) / 180);
        const sungNote = {
          frequency: freq,
          name: getNameAccidentalOctave(freq),
          centDiff: getCentDiff(freq),
          arrowValue,
        };
        return sungNote;
      };
      const payload = sN1();
      const expectedAction = {
        type: 'SET_SUNG_NOTE',
        payload,
      };
      expect(setSungNote(payload)).toEqual(expectedAction);
    });
  });

  describe('incrementTargetNoteIndex', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'INCREMENT_TARGET_NOTE_INDEX' };
      expect(incrementTargetNoteIndex()).toEqual(expectedAction);
    });
  });

  describe('resetInterface', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'RESET_INTERFACE' };
      expect(resetInterface()).toEqual(expectedAction);
    });
  });

  describe('pushScoreToExerciseScoresArray', () => {
    it('should return the expected action', () => {
      const score = 90;
      const expectedAction = {
        type: 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY',
        payload: score,
      };
      expect(pushScoreToExerciseScoresArray(score)).toEqual(expectedAction);
    });
  });

  describe('singButton', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'TOGGLE_SING_BUTTON' };
      expect(singButton()).toEqual(expectedAction);
    });
  });

  describe('resetState', () => {
    it('should return the expected action', () => {
      const expectedAction = { type: 'RESET_STATE' };
      expect(resetState()).toEqual(expectedAction);
    });
  });
});
