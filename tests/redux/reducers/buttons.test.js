import singButtonReducer from '../../../src/reducers/singButton';
import { currentPianoNoteReducer, captureReducer, octaveReducer } from '../../../src/reducers/interface';
import initialState from '../../../src/reducers/initialState';

describe('button-info-related reducers', () => {
  describe('singButtonReducer', () => {
    it('should initially return an empty string', () => {
      const initSingButton = {
        singText: 'Sing',
        disabled: true,
      };
      expect(initialState.singButton).toEqual(initSingButton);
    });

    it('should return the current state if an unknown action type is supplied', () => {
      const state = { singText: 'Sing', disabled: false };
      const action = { type: 'UNKNOWN' };
      const newState = singButtonReducer(state, action);
      expect(newState).toEqual(state);
    });

    it('should toggle the sing button to have a false disabled state when given an action type that says so', () => {
      const state = { singText: 'Sing', disabled: false };
      const action = { type: 'TOGGLE_SING_BUTTON' };
      const newState = singButtonReducer(initialState.singButton, action);
      expect(newState).toEqual(state);
    });

    it('should reset the state to an empty string when told to reset the interface', () => {
      const state = { singText: 'Sing', disabled: false };
      const action = { type: 'RESET_INTERFACE' };
      const newState = singButtonReducer(state, action);
      expect(newState).toEqual(initialState.singButton);
    });

    it('should reset the state to an empty string when told to reset the interface', () => {
      const state = { singText: 'Sing', disabled: false };
      const action = { type: 'RESET_INTERFACE' };
      const newState = singButtonReducer(state, action);
      expect(newState).toEqual(initialState.singButton);
    });
  });

  describe('currentPianoNoteReducer', () => {
    it('should initially return the initial state', () => {
      expect(initialState.currentPianoNote).toEqual('');
    });

    it('should return the current state if an unknown action type is supplied', () => {
      const action = { type: 'UNKNOWN' };
      const newState = currentPianoNoteReducer('foobar', action);
      expect(newState).toEqual('foobar');
    });

    it('should change the current note to the payload provided in the action supplied', () => {
      const action = {
        type: 'CURRENT_PIANO_NOTE',
        payload: 'F 3',
      };
      const newState = currentPianoNoteReducer('G 3', action);
      expect(newState).toEqual(action.payload);
    });

    it('should return the initial state when told to remove the piano note in the action supplied', () => {
      const action = { type: 'REMOVE_PIANO_NOTE' };
      const newState = currentPianoNoteReducer('G 3', action);
      expect(newState).toEqual(initialState.currentPianoNote);
    });

    it('should return the initial state when told to reset the interface', () => {
      const action = { type: 'RESET_INTERFACE' };
      const newState = currentPianoNoteReducer('G 3', action);
      expect(newState).toEqual(initialState.currentPianoNote);
    });
  });

  describe('captureReducer', () => {
    it('should initially return the initial state', () => {
      const initState = {
        capture: false,
        captureText: '',
        disabled: '',
        resetDisabled: 'disabled',
      };
      expect(initState).toEqual(initialState.capture);
    });

    it('should return the current state if an unknown action type is supplied', () => {
      const state = {
        capture: true,
        captureText: 'End',
        disabled: '',
        resetDisabled: '',
      };
      const action = { type: 'UNKNOWN' };
      const newState = captureReducer(state, action);
      expect(newState).toEqual(state);
    });

    it('should toggle capture state appropriately the first time the TOGGLE_CAPTURE action is given', () => {
      const nextState = {
        capture: true,
        captureText: 'End',
        disabled: '',
        resetDisabled: '',
      };
      const action = { type: 'TOGGLE_CAPTURE' };
      const state = captureReducer(initialState.capture, action);
      expect(state).toEqual(nextState);
    });

    it('should toggle capture state appropriately the second time the TOGGLE_CAPTURE action is given', () => {
      const initState = {
        capture: true,
        captureText: 'End',
        disabled: '',
        resetDisabled: '',
      };
      const nextState = {
        capture: false,
        captureText: '',
        disabled: 'disabled',
        resetDisabled: '',
      };
      const action = { type: 'TOGGLE_CAPTURE' };
      const state = captureReducer(initState, action);
      expect(state).toEqual(nextState);
    });

    it('should return the initial state when told to reset the interface', () => {
      const state = {
        capture: true,
        captureText: 'End',
        disabled: '',
        resetDisabled: '',
      };
      const action = { type: 'RESET_INTERFACE' };
      const newState = captureReducer(state, action);
      expect(newState).toEqual(initialState.capture);
    });
  });

  describe('octaveReducer', () => {
    it('should initially return the initial state', () => {
      const initState = {
        leftOctave: 3,
        rightOctave: 4,
        up: '',
        down: '',
      };
      expect(initialState.octave).toEqual(initState);
    });

    it('should return the current state if an unknown action type is supplied', () => {
      const initState = {
        leftOctave: 4,
        rightOctave: 5,
        up: '',
        down: '',
      }
      const action = { type: 'UNKNOWN' };
      const state = octaveReducer(initState, action);
      expect(state).toEqual(initState);
    });

    it('should increase the left & right octaves by 1 from 3 & 4 when given an action.payload containing an addition sign', () => {
      const initState = {
        leftOctave: 3,
        rightOctave: 4,
        up: '',
        down: '',
      };
      const action = { type: 'SHIFT_OCTAVES', payload: '+' };
      const state = octaveReducer(initState, action);
      expect(state.leftOctave).toEqual(4);
      expect(state.rightOctave).toEqual(5);
    });

    it('should increase the left & right octaves by 1 from 2 & 3 when given an action.payload containing an addition sign', () => {
      const initState = {
        leftOctave: 2,
        rightOctave: 3,
        up: '',
        down: 'disabled',
      };
      const action = { type: 'SHIFT_OCTAVES', payload: '+' };
      const state = octaveReducer(initState, action);
      expect(state.leftOctave).toEqual(3);
      expect(state.rightOctave).toEqual(4);
    });

    it('should decrement the left & right octaves by 1 from 3 & 4 when given an action.payload containing a subtraction sign', () => {
      const initState = {
        leftOctave: 3,
        rightOctave: 4,
        up: '',
        down: '',
      };
      const action = { type: 'SHIFT_OCTAVES', payload: '-' };
      const state = octaveReducer(initState, action);
      expect(state.leftOctave).toEqual(2);
      expect(state.rightOctave).toEqual(3);
    });

    it('should decrement the left & right octaves by 1 from 4 & 5 when given an action.payload containing a subtraction sign', () => {
      const initState = {
        leftOctave: 4,
        rightOctave: 5,
        up: 'disabled',
        down: '',
      };
      const action = { type: 'SHIFT_OCTAVES', payload: '-' };
      const state = octaveReducer(initState, action);
      expect(state.leftOctave).toEqual(3);
      expect(state.rightOctave).toEqual(4);
    });

    it("should give the * up * property a value of 'disabled' if the right octave is equal to 4 and the action.payload contains an addition sign", () => {
      const initState = {
        leftOctave: 3,
        rightOctave: 4,
        up: '',
        down: '',
      };
      const action = { type: 'SHIFT_OCTAVES', payload: '+' };
      const state = octaveReducer(initState, action);
      expect(state.up).toEqual('disabled');
    });

    it("should give the * down * property a value of 'disabled' if the left octave is equal to 3 and the action.payload contains an subtraction sign", () => {
      const initState = {
        leftOctave: 3,
        rightOctave: 4,
        up: '',
        down: '',
      };
      const action = { type: 'SHIFT_OCTAVES', payload: '-' };
      const state = octaveReducer(initState, action);
      expect(state.down).toEqual('disabled');
    });

    it('should return the initial state when told to reset the interface', () => {
      const initState = {
        leftOctave: 4,
        rightOctave: 5,
        up: '',
        down: '',
      };
      const action = { type: 'RESET_INTERFACE' };
      const state = octaveReducer(initState, action);
      expect(state).toEqual(initialState.octave);
    });
  });
});
