function getDisplayableNote(note, octave) {

  let displayNote = '';

  if (note[0] === 'G' && note[1] === '#') {
    displayNote = note + '/' + 'Ab ' + octave;
  }
  else if (note[1] === '#') {
    let unicode = note.charCodeAt(0) + 1;
    let flatNote = String.fromCharCode(unicode);
    displayNote = note + '/' + flatNote + 'b ' + octave;
  }
  else {
    displayNote = note + ' ' + octave;
  }

  return displayNote;
}

module.exports = getDisplayableNote;
