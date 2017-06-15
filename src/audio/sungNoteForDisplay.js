function getDisplayableNote(note) {

  let displayNote = '';

  if (note.length === 2) {
    displayNote = note[0].toUpperCase() + ' ' + note[1];
  }
  else if (note[1] === '#') {
    let upperCaseSharpNote = note[0].toUpperCase();
    let unicode = upperCaseSharpNote.charCodeAt() + 1;
    let flatNote = String.fromCharCode(unicode);
    if (note[0] === 'g') {
      flatNote = 'A';
    }
    displayNote = upperCaseSharpNote + '#/' + flatNote + 'b ' + note[2];
  }
  else if (note[1] === 'b') {
    let upperCaseFlatNote = note[0].toUpperCase();
    let unicode = upperCaseFlatNote.charCodeAt() - 1;
    let sharpNote = String.fromCharCode(unicode);
    displayNote = sharpNote + '#/' + upperCaseFlatNote + 'b ' + note[2];
  }
  return displayNote;
}


module.exports = getDisplayableNote;
