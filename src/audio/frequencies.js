

function getFrequencyAndKeyNum(note, octave) {

  if (octave === 3) {
    switch(note) {
      case 'C':
        return {frequency: 130.81, keyNum: 28};
      case 'C# / Db':
        return {frequency: 138.59, keyNum: 29};
      case 'D':
        return {frequency: 146.83, keyNum: 30};
      case 'D# / Eb':
        return {frequency: 155.56, keyNum: 31};
      case 'E':
        return {frequency: 164.81, keyNum: 32};
      case 'F':
        return {frequency: 174.61, keyNum: 33};
      case 'F# / Gb':
        return {frequency: 185.00, keyNum: 34};
      case 'G':
        return {frequency: 196.00, keyNum: 35};
      case 'G# / Ab':
        return {frequency: 207.65, keyNum: 36};
      case 'A':
        return {frequency: 220.00, keyNum: 37};
      case 'A# / Bb':
        return {frequency: 233.08, keyNum: 38};
      case 'B':
        return {frequency: 246.94, keyNum: 39};
      default:
        break;
    }
  }
  else if (octave === 4) {
    switch(note) {
      case 'C':
        return {frequency: 261.63, keyNum: 40};
      case 'C# / Db':
        return {frequency: 277.18, keyNum: 41};
      case 'D':
        return {frequency: 293.66, keyNum: 42};
      case 'D# / Eb':
        return {frequency: 311.13, keyNum: 43};
      case 'E':
        return {frequency: 329.63, keyNum: 44};
      case 'F':
        return {frequency: 349.23, keyNum: 45};
      case 'F# / Gb':
        return {frequency: 369.99, keyNum: 46};
      case 'G':
        return {frequency: 392.00, keyNum: 47};
      case 'G# / Ab':
        return {frequency: 415.30, keyNum: 48};
      case 'A':
        return {frequency: 440.00, keyNum: 49};
      case 'A# / Bb':
        return {frequency: 466.16, keyNum: 50};
      case 'B':
        return {frequency: 493.88, keyNum: 51};
      default:
        break;
    }
  }
  else if (octave === 5) {
    switch(note) {
      case 'C':
        return {frequency: 523.25, keyNum: 52};
      case 'C# / Db':
        return {frequency: 554.37, keyNum: 53};
      case 'D':
        return {frequency: 587.33, keyNum: 54};
      case 'D# / Eb':
        return {frequency: 622.25, keyNum: 55};
      case 'E':
        return {frequency: 659.25, keyNum: 56};
      case 'F':
        return {frequency: 698.46, keyNum: 57};
      case 'F# / Gb':
        return {frequency: 739.99, keyNum: 58};
      case 'G':
        return {frequency: 783.99, keyNum: 59};
      case 'G# / Ab':
        return {frequency: 830.61, keyNum: 60};
      case 'A':
        return {frequency: 880.00, keyNum: 29};
      case 'A# / Bb':
        return {frequency: 932.33, keyNum: 29};
      case 'B':
        return {frequency: 987.77, keyNum: 29};
      default:
        break;
    }
  }

}

export default getFrequencyAndKeyNum;
