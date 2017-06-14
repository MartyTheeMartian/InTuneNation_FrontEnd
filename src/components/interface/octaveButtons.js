import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shiftOctaves, toggleCapture, setExerciseId } from '../../actions';

const mapStateToProps = (state) => {
  return {
    captureText: state.captureReducer.captureText,
    disabled: state.captureReducer.disabled,
    leftOctave: state.octaveReducer.leftOctave,
    rightOctave: state.octaveReducer.rightOctave,
    up: state.octaveReducer.up,
    down: state.octaveReducer.down,
    keyEvents: state.keyEventsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ shiftOctaves, toggleCapture, setExerciseId }, dispatch);
};

class OctaveButtons extends Component {

  octaveShift = (direction) => { this.props.shiftOctaves(direction); }

  handleClick = () =>  {
    this.props.toggleCapture();
    if (this.props.disabled === '' && this.props.captureText === 'End') {
      console.log(this.props.keyEvents);
      const currentKeyNumCombo = (this.props.keyEvents).map((key) => { return key.keyNum; });
      const body = { notes_array: currentKeyNumCombo };
      const userId = parseInt(localStorage.getItem('userId'), 10);
      this.props.setExerciseId(userId, body);
    }
  }

  render() {
    return (
      <div id="octRow" className="row">
        <div className="col-md-4 col-sm-4 col-xs-4">
          <button onClick={() => this.octaveShift('-')} className="btn octaveButtons btn-lg active" disabled={this.props.down}> - Octave <br /> {this.props.leftOctave}</button>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <button onClick={this.handleClick} className="btn captureButton btn-lg active" disabled={this.props.disabled}>{this.props.captureText}<br />Capture</button>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <button id="rOctBut" onClick={() => this.octaveShift('+')} className="btn octaveButtons btn-lg active" disabled={this.props.up}> Octave +  <br /> {this.props.rightOctave}</button>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OctaveButtons);
