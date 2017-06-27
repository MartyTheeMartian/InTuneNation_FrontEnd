import teoria from 'teoria';
import { FreqConversion } from '../../src/utils/freq_conversion';

const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const expect = chai.expect;
const should = chai.should();


describe('FreqConversion class', () => {
  beforeEach(() => {
    const tuning = (greenYellowBand, redYellowBand) => {
      return {
        greenYellowBand,
        redYellowBand,
      };
    };
    const tuningSpecs = tuning(20, 40);
    const targetNote = 'a4';
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

      });
    });

    describe('this.tuningSpecs', () => {
      it('should equal the tuningSpecs passed in', () => {

      });
    });

    describe('this.note', () => {
      it('should equal the full version of whatever note is being sung', () => {

      });
    });

    describe('this.keyNum', () => {
      it('should equal the piano key number of whatever note is being sung', () => {

      });
    });

    describe('this.centDiff', () => {
      it('should equal the cent differential the note is from the nearest perfect note', () => {

      });
    });
  });

  describe('fq()', () => {
    it('should return this.fq', () => {

    });
  });

  describe('note()', () => {
    it('should return this.note', () => {

    });
  });

  describe('keyNum()', () => {
    it('should return this.keyNum', () => {

    });
  });

  describe('centDiff()', () => {
    it('should return this.centDiff', () => {

    });
  });

  describe('green()', () => {
    it('should return true if the users cent differential is within the green zone', () => {

    });

    it('should return false if the users cent differential is outside of the green zone', () => {

    });
  });

  describe('inTune()', () => {
    it('should return true if the user is singing in tune', () => {

    });

    it('should return false otherwise', () => {

    });
  });

  describe('yellow()', () => {
    it('should return true if the users cent differential is within the yellow zone', () => {

    });

    it('should return false otherwise', () => {

    });
  });

  describe('somewhatInTune()', () => {
    it('should return true if the user is flat but still singing the same note', () => {

    });

    it('should return false otherwise', () => {

    });
  });

  describe('red()', () => {
    it('should return true if the users cent differential within the red zone', () => {

    });

    it('should return false otherwise', () => {

    });
  });

  describe('outOfTune()', () => {
    it('should return true if the user is singing at least a half step flat or sharp', () => {

    });

    it('should return false otherwise', () => {

    });
  });
});
