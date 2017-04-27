
export const pushNoteToArray = (noteObj) => {
  return {
    type: 'NOTE_TO_ARRAY',
    payload: noteObj
  };
};

export const toggleCapture = () => {
  return {
    type: 'TOGGLE_CAPTURE'
  };
};

export const shiftOctaves = (direction) => {
  return {
    type: 'SHIFT_OCTAVES',
    payload: direction
  };
};
