import { FreqConversion } from '../../src/utils/freq_conversion';

const chai = require('chai');

const expect = chai.expect;

const tuningSpecs = { greenYellowBand: 20, redYellowBand: 40 };
const targetNote = 'a4';
let veryFlat;
let flat;
let somewhatFlat;
let inTune;
let somewhatSharp;
let sharp;
let verySharp;

describe('FreqConversion class', () => {
  beforeEach(() => {
    veryFlat = new FreqConversion(391.995, tuningSpecs, targetNote); // whole step below A4
    flat = new FreqConversion(428.710, tuningSpecs, targetNote); // 45 cents below A4
    somewhatFlat = new FreqConversion(433.692, tuningSpecs, targetNote); // 25 cents below A4
    inTune = new FreqConversion(440, tuningSpecs, targetNote); // dead-center
    somewhatSharp = new FreqConversion(446.400, tuningSpecs, targetNote); // 25 cents above A4
    sharp = new FreqConversion(451.587, tuningSpecs, targetNote); // 45 cents below A4
    verySharp = new FreqConversion(493.883, tuningSpecs, targetNote); // whole step above A4
  });

  describe('initialization', () => {
    describe('this.fq', () => {
      it('should equal the frequency passed in', () => {
        expect(veryFlat.fq).to.equal(391.995);
        expect(flat.fq).to.equal(428.710);
        expect(somewhatFlat.fq).to.equal(433.692);
        expect(inTune.fq).to.equal(440);
        expect(somewhatSharp.fq).to.equal(446.400);
        expect(sharp.fq).to.equal(451.587);
        expect(verySharp.fq).to.equal(493.883);
      });
    });

    describe('this.tuningSpecs', () => {
      it('should equal the tuningSpecs passed in', () => {
        expect(inTune.tuningSpecs).to.equal(tuningSpecs);
      });
    });

    describe('this.note', () => {
      it('should equal the full version of whatever note is being sung', () => {
        expect(flat.note).to.equal('a4');
        expect(inTune.note).to.equal('a4');
        expect(sharp.note).to.equal('a4');
      });
    });

    describe('this.keyNum', () => {
      it('should equal the piano key number of whatever note is being sung', () => {
        expect(flat.keyNum).to.equal(49);
        expect(inTune.keyNum).to.equal(49);
        expect(sharp.keyNum).to.equal(49);
      });
    });

    describe('this.centDiff', () => {
      it('should equal the cent differential the note is from the nearest perfect note', () => {
        expect(flat.centDiff).to.equal(-45.00174503890853);
        expect(somewhatFlat.centDiff).to.equal(-24.999231175951913);
        expect(inTune.centDiff).to.equal(0);
        expect(somewhatSharp.centDiff).to.equal(25.000204100598523);
        expect(sharp.centDiff).to.equal(45.000517883263925);
      });
    });
  });

  describe('getFq()', () => {
    it('should return this.fq', () => {
      expect(inTune.getFq()).to.equal(inTune.fq);
    });
  });

  describe('getNote()', () => {
    it('should return this.note', () => {
      expect(inTune.getNote()).to.equal(inTune.note);
    });
  });

  describe('keyNum()', () => {
    it('should return this.keyNum', () => {
      expect(inTune.getKeyNum()).to.equal(inTune.keyNum);
    });
  });

  describe('centDiff()', () => {
    it('should return this.centDiff', () => {
      expect(inTune.getCentDiff()).to.equal(inTune.centDiff);
    });
  });

  describe('green()', () => {
    it('should return true if the cent differential of the users note is within the green zone', () => {
      expect(veryFlat.green()).to.equal(true);
      expect(inTune.green()).to.equal(true);
      expect(verySharp.green()).to.equal(true);
    });

    it('should return false otherwise', () => {
      expect(flat.green()).to.equal(false);
      expect(somewhatFlat.green()).to.equal(false);
      expect(somewhatSharp.green()).to.equal(false);
      expect(sharp.green()).to.equal(false);
    });
  });

  describe('inTune()', () => {
    it('should return true if the user is singing in tune', () => {
      expect(inTune.inTune).to.equal(true);
    });

    it('should return false otherwise', () => {
      expect(veryFlat.inTune).to.equal(false);
      expect(flat.inTune).to.equal(false);
      expect(somewhatFlat.inTune).to.equal(false);
      expect(somewhatSharp.inTune).to.equal(false);
      expect(sharp.inTune).to.equal(false);
      expect(verySharp.inTune).to.equal(false);
    });
  });

  describe('yellow()', () => {
    it('should return true if the users cent differential is within the yellow zone', () => {
      expect(somewhatFlat.yellow()).to.equal(true);
      expect(somewhatSharp.yellow()).to.equal(true);
    });

    it('should return false otherwise', () => {
      expect(veryFlat.yellow()).to.equal(false);
      expect(flat.yellow()).to.equal(false);
      expect(inTune.yellow()).to.equal(false);
      expect(sharp.yellow()).to.equal(false);
      expect(verySharp.yellow()).to.equal(false);
    });
  });

  describe('somewhatInTune()', () => {
    it('should return true if the user is flat but still singing the same note', () => {
      expect(somewhatFlat.somewhatInTune).to.equal(true);
      expect(somewhatSharp.somewhatInTune).to.equal(true);
    });

    it('should return false otherwise', () => {
      expect(veryFlat.somewhatInTune).to.equal(false);
      expect(flat.somewhatInTune).to.equal(false);
      expect(inTune.somewhatInTune).to.equal(false);
      expect(sharp.somewhatInTune).to.equal(false);
      expect(verySharp.somewhatInTune).to.equal(false);
    });
  });

  describe('red()', () => {
    it('should return true if the users cent differential within the red zone', () => {
      expect(flat.red()).to.equal(true);
      expect(sharp.red()).to.equal(true);
    });

    it('should return false otherwise', () => {
      expect(verySharp.red()).to.equal(false);
      expect(somewhatFlat.red()).to.equal(false);
      expect(inTune.red()).to.equal(false);
      expect(somewhatSharp.red()).to.equal(false);
      expect(verySharp.red()).to.equal(false);
    });
  });

  describe('outOfTune()', () => {
    it('should return true if the user is singing at least a half step flat or sharp', () => {
      expect(veryFlat.outOfTune).to.equal(true);
      expect(flat.outOfTune).to.equal(true);
      expect(sharp.outOfTune).to.equal(true);
      expect(verySharp.outOfTune).to.equal(true);
    });

    it('should return false otherwise', () => {
      expect(somewhatFlat.outOfTune).to.equal(false);
      expect(inTune.outOfTune).to.equal(false);
      expect(somewhatSharp.outOfTune).to.equal(false);
    });
  });
});
