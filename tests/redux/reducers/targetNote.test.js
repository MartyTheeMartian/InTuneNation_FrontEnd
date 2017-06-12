import targetNoteReducer from '../../../src/reducers/targetNote';
import targetNoteIndexReducer from '../../../src/reducers/targetNoteIndex';
import initialState from '../../../src/reducers/initialState';
import getFrequencyAndKeyNum from '../../../src/audio/frequencies';

describe('note-related reducers', () => {
  describe('targetNoteReducer', () => {
    it('should initially be set to null', () => {
      const initState = initialState;
      expect(initState.targetNote).toEqual(null);
    });

    it('should properly change the target note from null/previousTN to whatever key event is passed in the first time', () => {
      const initState = initialState;
      const note = 'C';
      const octave = 3;
      const keyNum = getFrequencyAndKeyNum(note, octave).keyNum;
      const tNote = getFrequencyAndKeyNum(note, octave).tNote;
      const keyEvent = {
        noteName: note,
        octave,
        keyNum,
        tNote,
      };
      const action = {
        type: 'SET_KEY_EVENT_AS_TARGET_NOTE',
        payload: keyEvent,
      };
      const nextTargetNote = targetNoteReducer(initState, action);
      expect(nextTargetNote).toEqual(keyEvent);
    });
  });
  describe('targetNoteIndexReducer', () => {
    it('should initially be set to zero', () => {
      expect(initialState.targetNoteIndex).toEqual(0);
    });

    it('should return the next target note index if given an action to increment it', () => {
      const tnIndex = targetNoteIndexReducer(initialState.targetNoteIndex, { type: 'INCREMENT_TARGET_NOTE_INDEX' });
      expect(tnIndex).toEqual(1);
    });

    it('should reset back to zero if the action specifies to reset the interface', () => {
      const tnIndex = targetNoteIndexReducer(50, { type: 'RESET_INTERFACE' });
      expect(tnIndex).toEqual(0);
    });
  });
});
