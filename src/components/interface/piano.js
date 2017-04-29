import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushKeyEventToArray } from '../../actions';
import { octaveReducer } from '../../reducers';
import getFrequencyAndKeyNum from '../../audio/frequencies';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gainNode = ctx.createGain();
const distortion = ctx.createWaveShaper();

function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

osc.connect(gainNode);
osc.connect(distortion);
gainNode.connect(ctx.destination);
distortion.connect(ctx.destination);
osc.connect(ctx.destination);
osc.type = 'square';
osc.frequency.value = 0;
gainNode.gain.value = 0;
distortion.curve = makeDistortionCurve(666);
osc.start(0);


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    octave: state.octaveReducer.current,
    capture: state.captureReducer.capture
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ pushKeyEventToArray }, dispatch);
};


class Piano extends Component {
  constructor(props) {
    super();
  }

  handleClick = (noteNamesArray) => {

    const freqAndKeyNum = getFrequencyAndKeyNum(noteNamesArray, this.props.octave);
    console.log(noteNamesArray);
    console.log(this.props.octave);
    console.log(getFrequencyAndKeyNum);
    console.log(freqAndKeyNum);
    console.log(getFrequencyAndKeyNum(noteNamesArray, this.props.octave));
    const keyNum = freqAndKeyNum.keyNum;

    let noteObj = {
      noteNamesArray,
      octave: this.props.octave,
      keyNum: keyNum
    };

    console.log(noteObj);

    if (this.props.capture) {
      this.props.pushKeyEventToArray(noteObj);
    }

    osc.frequency.value = freqAndKeyNum.frequency;
    gainNode.gain.value = 0.25;

    setTimeout(() => {
      gainNode.gain.value = 0;
      osc.frequency.value = 0;
    }, 700);

  }

  render() {
    return (
      <div className="row">
        <div className="octave">
          <div onClick={() => this.handleClick(['c'])} className="white-key" ></div>
          <div onClick={() => this.handleClick(['c#','db'])} className="black-key" ></div>
          <div onClick={() => this.handleClick(['d'])} className="white-key" ></div>
          <div onClick={() => this.handleClick(['d#', 'eb'])} className="black-key" ></div>
          <div onClick={() => this.handleClick(['e'])} className="white-key" ></div>
          <div onClick={() => this.handleClick(['f'])} className="white-key" ></div>
          <div onClick={() => this.handleClick(['f#', 'gb'])} className="black-key" ></div>
          <div onClick={() => this.handleClick(['g'])} className="white-key" ></div>
          <div onClick={() => this.handleClick(['g#', 'ab'])} className="black-key" ></div>
          <div onClick={() => this.handleClick(['a'])} className="white-key" ></div>
          <div onClick={() => this.handleClick(['a#', 'bb'])} className="black-key" ></div>
          <div onClick={() => this.handleClick(['b'])} className="white-key" ></div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Piano);
