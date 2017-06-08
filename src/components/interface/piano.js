import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect as reactConnect } from 'react-redux';
import { pushKeyEventToArray, currentPianoNote } from '../../actions';
import getFrequencyAndKeyNum from '../../audio/frequencies';
// import getDistortionCurve from '../../audio/distort';
import Tone from '../../../tone-js/tone';


const mapStateToProps = (state) => {
  return {
    octave: state.octaveReducer.current,
    capture: state.captureReducer.capture,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ pushKeyEventToArray, currentPianoNote }, dispatch);
};

class Piano extends Component {

  constructor(props) {
    super(props);
    this.synth = new Tone.Synth().toMaster();
  }

  handleClick = (note) => {

    this.props.currentPianoNote(note);

    if (this.props.capture) {
      const freqAndKeyNum = getFrequencyAndKeyNum(note, this.props.octave);
      const keyNum = freqAndKeyNum.keyNum;
      const tNote = freqAndKeyNum.tNote;
      let noteObj = {
        noteName: note,
        octave: this.props.octave,
        keyNum,
        tNote,
      };
      this.props.pushKeyEventToArray(noteObj);
    }

    let toneNote = note + this.props.octave;

    this.synth.triggerAttackRelease(toneNote, 0.65);
  }

  render() {
    return (
      <div>
        <div onClick={() => this.handleClick('C')} className="white-key"  ></div>
        <div onClick={() => this.handleClick('C#')} className="black-key" ></div>
        <div onClick={() => this.handleClick('D')} className="white-key" ></div>
        <div onClick={() => this.handleClick('D#')} className="black-key" ></div>
        <div onClick={() => this.handleClick('E')} className="white-key" ></div>
        <div onClick={() => this.handleClick('F')} className="white-key" ></div>
        <div onClick={() => this.handleClick('F#')} className="black-key" ></div>
        <div onClick={() => this.handleClick('G')} className="white-key" ></div>
        <div onClick={() => this.handleClick('G#')} className="black-key" ></div>
        <div onClick={() => this.handleClick('A')} className="white-key" ></div>
        <div onClick={() => this.handleClick('A#')} className="black-key" ></div>
        <div onClick={() => this.handleClick('B')} className="white-key" ></div>
      </div>
    );
  }

}

export default reactConnect(mapStateToProps, mapDispatchToProps)(Piano);
