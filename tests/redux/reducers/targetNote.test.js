import keyEventsReducer from '../../../src/reducers/keyEvents';
import targetNoteReducer from '../../../src/reducers/targetNote';
import targetNoteIndexReducer from '../../../src/reducers/targetNoteIndex';
import initialState from '../../../src/reducers/initialState';
import getKeyNum from '../../../src/audio/keyNumGenerator';

const keyEventFn = () => {
  const note = 'C';
  const octave = 3;
  const keyNum = getKeyNum(note, octave).keyNum;
  const tNote = getKeyNum(note, octave).tNote;
  const keyEvent = {
    noteName: note,
    octave,
    keyNum,
    tNote,
  };
  return keyEvent;
}

describe('note-related reducers', () => {
  describe('keyEventsReducer', () => {
    it('should initially equal an empty array', () => {
      const initKeyEvents = keyEventsReducer(initialState.keyStrokeEvents, { type: 'UNKNOWN' });
      expect(initKeyEvents).toEqual([]);
    });

    it('should add a key event when given an action & payload specified', () => {
      const keyEvent = keyEventFn();
      const action = {
        type: 'ADD_KEY_EVENT',
        payload: keyEvent,
      };
      const newKeyEvents = keyEventsReducer(initialState.keyStrokeEvents, action);
      // expect(newKeyEvents).toNotBe([]);
      expect(newKeyEvents).toEqual([keyEvent]);
    });

    it('should reset the state to an empty array when asked to reset the interface', () => {
      const keyEvent = keyEventFn();
      let action = {
        type: 'ADD_KEY_EVENT',
        payload: keyEvent,
      };
      const addedKeyEvents = keyEventsReducer(initialState.keyStrokeEvents, action);
      action = { type: 'RESET_INTERFACE' };
      const resetKeyEvents = keyEventsReducer(addedKeyEvents, action);
      expect(resetKeyEvents).toEqual([]);
    });
  });

  describe('targetNoteReducer', () => {
    it('should initially be set to null', () => {
      const initState = initialState;
      expect(initState.targetNote).toEqual(null);
    });

    it('should properly change the target note from null/previousTN to whatever key event is passed in the first time', () => {
      const initState = initialState;
      const keyEvent = keyEventFn();
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
