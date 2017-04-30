import teoria from 'teoria';

export const pushKeyEventToArray = (noteObj) => {
  return {
    type: 'ADD_KEY_EVENT',
    payload: noteObj,
  };
};

export const toggleCapture = () => {
  return {
    type: 'TOGGLE_CAPTURE',
  };
};

export const signUserUp = (email, firstName, lastName, password) => {
  return {
    type: 'SIGN_USER_UP',
    payload: {
      email,
      firstName,
      lastName,
      password,
    },
  };
};

// export const logUserIn = (email, password) => {
//   return {
//     type: 'LOG_USER_IN',
//     payload: {
//       email: email,
//       password: password
//     }
//   };
// };

export const shiftOctaves = (direction) => {
  return {
    type: 'SHIFT_OCTAVES',
    payload: direction,
  };
};

export const toggleAudioCapture = () => {
  console.log('React/src/actions/index/activateVocalInput()');
  return {
    type: 'TOGGLE_AUDIO_CAPTURE',
  };
};

export const incrementGreenTime = () => {
  console.log('GREEN TIME INCREMENTED!!');
  return {
    type: 'INCREMENT_GREEN_TIME',
  };
};

export const resetGreenTime = () => {
  return {
    type: 'RESET_GREEN_TIME',
  };
};

export const changeGreenTimeRequirement = (amount) => {
  return {
    type: 'CHANGE_GREEN_TIME_REQUIREMENT',
    amount: amount
  };
};

export const decrementScore = (amount) => {
  return {
    type: 'DECREMENT_SCORE',
    amount: amount,
  };
};

export const resetScore = () => {
  return {
    type: 'RESET_SCORE'
  };
};

export const setKeyEventAsTargetNote = (keyEvent) => {
  return {
    type: 'SET_KEY_EVENT_AS_TARGET_NOTE',
    payload: keyEvent,
  };
};

export const setSungNote = (note) => {
  return {
    type: 'SET_SUNG_NOTE',
    payload: note,
  };
};

export const incrementTargetNoteIndex = () => {
  return {
    type: 'INCREMENT_TARGET_NOTE_INDEX',
  };
};

export const resetTargetNoteIndex = () => {
  return {
    type: 'RESET_TARGET_NOTE_INDEX',
  };
};

export const pushScoreToExerciseScoresArray = (score) => {
  return {
    type: 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY',
    payload: score,
  };
};

// teoria functions for music theory
function getName(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).name(); }
function getAccidental(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).accidental(); }
function getOctave(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).octave(); }
function getNameAccidental(frequency) { return [getName(frequency), getAccidental(frequency)].join(''); }
function getNameAccidentalOctave(freq) { return [getName(freq), getAccidental(freq), getOctave(freq)].join(''); }
function getCentDiff(freq) { return teoria.note.fromFrequency(freq).cents }
function getNotePlusCentDiff(frequency) { return [getNameAccidental(frequency), getCentDiff(frequency)]; }
function getPreciseNotePlusCentDiff(frequency) { return [getNameAccidentalOctave(frequency), getCentDiff(frequency)]; }
function getPreciseNotePlusCentDiffPlusFreq(freq) {
  const result = getPreciseNotePlusCentDiff(freq);
  return result.concat(freq);
}
