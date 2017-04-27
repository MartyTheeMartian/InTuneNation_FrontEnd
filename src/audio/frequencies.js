

function getFrequency(note) {

  switch(note) {
    case 'C':
      return 261.63;
    case 'C# / Db':
      return 277.18;
    case 'D':
      return 293.66;
    case 'D# / Eb':
      return 311.13;
    case 'E':
      return 329.63;
    case 'F':
      return 349.23;
    case 'F# / Gb':
      return 369.99;
    case 'G':
      return 392.00;
    case 'G# / Ab':
      return 415.30;
    case 'A':
      return 440.00;
    case 'A# / Bb':
      return 466.16;
    case 'B':
      return 493.88;
  }
}

export default getFrequency;
