import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect as reactConnect } from 'react-redux';
import { pushKeyEventToArray, currentPianoNote } from '../../actions';
import getFrequencyAndKeyNum from '../../audio/frequencies';
// import getDistortionCurve from '../../audio/distort';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gainNode = ctx.createGain();


osc.connect(gainNode);
gainNode.connect(ctx.destination);
// osc.type = 'square';
osc.connect(ctx.destination);
osc.frequency.value = 0;
gainNode.gain.value = 0;
osc.start();

const mapStateToProps = (state) => {
  return {
    disabled: state.captureReducer.disabled,
    octave: state.octaveReducer.current,
    capture: state.captureReducer.capture,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ pushKeyEventToArray, currentPianoNote }, dispatch);
};

class Piano extends Component {

  handleClick = (note) => {
    this.props.currentPianoNote(note);

    const freqAndKeyNum = getFrequencyAndKeyNum(note, this.props.octave);
    const keyNum = freqAndKeyNum.keyNum;
    const tNote = freqAndKeyNum.tNote;

    let noteObj = {
      noteName: note,
      octave: this.props.octave,
      keyNum,
      tNote,
    };

    if (this.props.capture) { this.props.pushKeyEventToArray(noteObj); }

    if (this.props.disabled !== 'disabled') {
      osc.frequency.value = freqAndKeyNum.frequency;
      // gainNode.gain.value = 0.8;

      setTimeout(() => {
        osc.frequency.value = 0;
        gainNode.gain.value = 0;
      }, 600);
    }

  }

  render() {
    return (
      <div>
        <div onClick={() => this.handleClick('C')} className="white-key"  ></div>
        <div onClick={() => this.handleClick('C# / Db')} className="black-key" ></div>
        <div onClick={() => this.handleClick('D')} className="white-key" ></div>
        <div onClick={() => this.handleClick('D# / Eb')} className="black-key" ></div>
        <div onClick={() => this.handleClick('E')} className="white-key" ></div>
        <div onClick={() => this.handleClick('F')} className="white-key" ></div>
        <div onClick={() => this.handleClick('F# / Gb')} className="black-key" ></div>
        <div onClick={() => this.handleClick('G')} className="white-key" ></div>
        <div onClick={() => this.handleClick('G# / Ab')} className="black-key" ></div>
        <div onClick={() => this.handleClick('A')} className="white-key" ></div>
        <div onClick={() => this.handleClick('A# / Bb')} className="black-key" ></div>
        <div onClick={() => this.handleClick('B')} className="white-key" ></div>
      </div>
    );
  }

}

export default reactConnect(mapStateToProps, mapDispatchToProps)(Piano);
