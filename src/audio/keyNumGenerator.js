function getKeyNum(note, octave) {

  let noteObj = {};
  const notesArray = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  for (let i = 0; i < notesArray.length; i++) {
    if (note === notesArray[i]) {
      noteObj.keyNum = octave * 12 - 8 + i;
      break;
    }
  }
  if (note === 'D#') {
    noteObj.tNote = 'eb' + octave;
  }
  else if (note === 'C#') {
    noteObj.tNote = 'db' + octave;
  }
  else {
    noteObj.tNote = note.toLowerCase() + octave;
  }
  return noteObj;
}

export default getKeyNum;
