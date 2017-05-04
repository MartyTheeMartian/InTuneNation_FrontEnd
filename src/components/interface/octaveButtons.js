import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shiftOctaves, toggleCapture, setExerciseId } from '../../actions';

const mapStateToProps = (state) => {
  return {
    captureText: state.captureReducer.captureText,
    disabled: state.captureReducer.disabled,
    octave: state.octaveReducer.current,
    up: state.octaveReducer.up,
    down: state.octaveReducer.down,
    user: state.loginReducer,
    keyEvents: state.keyEventsReducer,
    exerciseId: state.currentExerciseIdReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ shiftOctaves, toggleCapture, setExerciseId }, dispatch);
};


class OctaveButtons extends Component {

  octaveShift = (direction) => {
    this.props.shiftOctaves(direction);
  }

  handleClick = () =>  {
    console.log('handleClick activated');
    this.props.toggleCapture();
    console.log('toggleCapture action sent');
    console.log(this.props.props);
    if (this.props.disabled === "" && this.props.captureText === "End Capture") {
      console.log(this.props);
      const currentKeyNumCombo = (this.props.keyEvents).map((key) => { return key.keyNum; });
      console.log('currentKeyNumCombo === ', currentKeyNumCombo);
      const body = { notes_array: currentKeyNumCombo, token: localStorage.getItem('token') };
      console.log('body === ', body);
      this.props.setExerciseId(this.props.user.id, body);
    }
    console.log(this.props.exerciseId);
  }

  render() {
    return (
      <div id="octRow" className="row">
        <div className="col-md-2 col-sm-4">
          <button onClick={() => this.octaveShift('-')} className="btn btn-primary btn-lg active" disabled={this.props.down} > - Octave</button>
        </div>
        <div className="col-md-2 col-sm-4">
          <button onClick={this.handleClick} className="btn btn-info btn-lg active" disabled={this.props.disabled}>{this.props.captureText}</button>
        </div>
        <div className="col-md-2 col-sm-4">
          <button id="rOctBut" onClick={() => this.octaveShift('+')} className="btn btn-primary btn-lg active" disabled={this.props.up} >Octave +</button>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OctaveButtons);
