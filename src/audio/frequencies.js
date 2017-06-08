
function getFrequencyAndKeyNum(note, octave) {
  if (octave === 3) {
    switch (note) {
      case 'C':
        return { frequency: 130.81, keyNum: 28, tNote: 'c3' };
      case 'C#':
        return { frequency: 138.59, keyNum: 29, tNote: 'c#3' };
      case 'D':
        return { frequency: 146.83, keyNum: 30, tNote: 'd3' };
      case 'D#':
        return { frequency: 155.56, keyNum: 31, tNote: 'd#3' };
      case 'E':
        return { frequency: 164.81, keyNum: 32, tNote: 'e3' };
      case 'F':
        return { frequency: 174.61, keyNum: 33, tNote: 'f3' };
      case 'F#':
        return { frequency: 185.00, keyNum: 34, tNote: 'f#3' };
      case 'G':
        return { frequency: 196.00, keyNum: 35, tNote: 'g3' };
      case 'G#':
        return { frequency: 207.65, keyNum: 36, tNote: 'g#3' };
      case 'A':
        return { frequency: 220.00, keyNum: 37, tNote: 'a3' };
      case 'A#':
        return { frequency: 233.08, keyNum: 38, tNote: 'a#3' };
      case 'B':
        return { frequency: 246.94, keyNum: 39, tNote: 'b3' };
      default:
        break;
    }
  } else if (octave === 4) {
    switch (note) {
      case 'C':
        return { frequency: 261.63, keyNum: 40, tNote: 'c4' };
      case 'C#':
        return { frequency: 277.18, keyNum: 41, tNote: 'c#4' };
      case 'D':
        return { frequency: 293.66, keyNum: 42, tNote: 'd4' };
      case 'D#':
        return { frequency: 311.13, keyNum: 43, tNote: 'd#4' };
      case 'E':
        return { frequency: 329.63, keyNum: 44, tNote: 'e4' };
      case 'F':
        return { frequency: 349.23, keyNum: 45, tNote: 'f4' };
      case 'F#':
        return { frequency: 369.99, keyNum: 46, tNote: 'f#4' };
      case 'G':
        return { frequency: 392.00, keyNum: 47, tNote: 'g4' };
      case 'G#':
        return { frequency: 415.30, keyNum: 48, tNote: 'g#4' };
      case 'A':
        return { frequency: 440.00, keyNum: 49, tNote: 'a4' };
      case 'A#':
        return { frequency: 466.16, keyNum: 50, tNote: 'a#4' };
      case 'B':
        return { frequency: 493.88, keyNum: 51, tNote: 'b#' };
      default:
        break;
    }
  } else if (octave === 5) {
    switch (note) {
      case 'C':
        return { frequency: 523.25, keyNum: 52, tNote: 'c5' };
      case 'C#':
        return { frequency: 554.37, keyNum: 53, tNote: 'c#5' };
      case 'D':
        return { frequency: 587.33, keyNum: 54, tNote: 'd5' };
      case 'D#':
        return { frequency: 622.25, keyNum: 55, tNote: 'd#5' };
      case 'E':
        return { frequency: 659.25, keyNum: 56, tNote: 'e5' };
      case 'F':
        return { frequency: 698.46, keyNum: 57, tNote: 'e#5' };
      case 'F#':
        return { frequency: 739.99, keyNum: 58, tNote: 'f#5' };
      case 'G':
        return { frequency: 783.99, keyNum: 59, tNote: 'g5' };
      case 'G#':
        return { frequency: 830.61, keyNum: 60, tNote: 'g#5' };
      case 'A':
        return { frequency: 880.00, keyNum: 61, tNote: 'a5' };
      case 'A#':
        return { frequency: 932.33, keyNum: 62, tNote: 'a#5' };
      case 'B':
        return { frequency: 987.77, keyNum: 63, tNote: 'b5' };
      default:
        break;
    }
  }
}
export default getFrequencyAndKeyNum;
