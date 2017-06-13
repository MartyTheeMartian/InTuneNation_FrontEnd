import teoria from 'teoria';

function getName(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).name(); }
function getAccidental(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).accidental(); }
function getOctave(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).octave(); }
function getNameAccidentalOctave(freq) { return [getName(freq), getAccidental(freq), getOctave(freq)].join(''); }
function getKeyNum(frequency) { return teoria.note(teoria.note.fromFrequency(frequency).note.coord).key() }
function getCentDiff(freq) { return teoria.note.fromFrequency(freq).cents; }
function getPreciseNotePlusCentDiff(frequency) { return [getNameAccidentalOctave(frequency), getCentDiff(frequency)]; }
// function getPreciseNotePlusCentDiffPlusFreq(freq) {
//   const result = getPreciseNotePlusCentDiff(freq);
//   return result.concat(freq);
// }
// function centDiffInRed(cD) { return (cD < -40 && cD > 40); }
function centDiffInYellow(cD)  { return ((cD > -50 && cD < -3) || (cD < 50 && cD > 3)); }
function centDiffInGreen(cD) { return (cD > -3 && cD < 3); }

const green = (targetNoteName, sungNoteName, fq) => {
  return (centDiffInGreen(getCentDiff(fq)) && targetNoteName === sungNoteName);
};

const yellow = (targetNoteName, sungNoteName, fq) => {
  return (centDiffInYellow(getCentDiff(fq)) && targetNoteName === sungNoteName);
};

const red = (targetNoteName, sungNoteName, fq) => {
  if (targetNoteName !== sungNoteName) {
    return true;
  } else {
    return false;
  //  return centDiffInRed(getCentDiff(fq));
  }
};

module.exports = {
  getName,
  getAccidental,
  getOctave,
  getNameAccidentalOctave,
  getKeyNum,
  getCentDiff,
  getPreciseNotePlusCentDiff,
  centDiffInYellow,
  centDiffInGreen,
  green,
  yellow,
  red,
};
