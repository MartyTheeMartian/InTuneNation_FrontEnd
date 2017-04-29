export default {
  notesArray: [],
  capture: {
    capture: false,
    captureText: 'Capture Keyboard',
    disabled: '',
  },
  octave: {
    current: 3,
    up: '',
    down: '',
  },
  keyStrokeEvents: [],
  vocalInputResults: [],
  exerciseScores: [],
  greenTime: {
    accumulated: 0,
    required: 5,
  },
  targetNote: null,
  targetNoteIndex: 0,
  sungNote: {
    frequency: null,
    name: null,
    centDiff: null,
    arrowValue: 90/180,
  },
  recordingStatus: false,
};
