import sungNoteReducer from '../../../src/reducers/sungNote';
import initialState from '../../../src/reducers/initialState';

import { getNameAccidentalOctave, getCentDiff } from '../../../src/utils/teoria_helpers';

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

const sN2 = () => {
  const freq = 439;
  const arrowValue = ((180 * ((getCentDiff(freq) + 50) / 100)) / 180);
  const sungNote = {
    frequency: freq,
    name: getNameAccidentalOctave(freq),
    centDiff: getCentDiff(freq),
    arrowValue,
  };
  return sungNote;
};

describe('sungNoteReducer', () => {
  it('should initially return the appropriate sungNote object', () => {
    const initSN = sungNoteReducer(initialState.sungNote, { type: 'UNKNOWN' });
    expect(initSN).toEqual(initialState.sungNote);
  });

  it('should return the current state if given an unknown action type', () => {
    const sungNote = sN1();
    const newSungNote = sungNoteReducer(sungNote, { type: 'UNKNOWN' });
    expect(newSungNote).toEqual(sungNote);
  });

  it('should change the sung note when given another to replace it', () => {
    const sn1 = sN1();
    const sn2 = sN2();
    const action = {
      type: 'SET_SUNG_NOTE',
      payload: sn2,
    };
    const newSungNote = sungNoteReducer(sn1, action);
    expect(newSungNote).toEqual(sn2);
  });

  it('should reset the sung note state back to initial state when asked to reset the interface', () => {
    const sn1 = sN1();
    const action = { type: 'RESET_INTERFACE' };
    const resetSN = sungNoteReducer(sn1, action);
    expect(resetSN).toEqual(initialState.sungNote);
  });
});
