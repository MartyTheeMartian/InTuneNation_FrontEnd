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

  octaveShift = (direction) => { this.props.shiftOctaves(direction); }

  handleClick = () =>  {
    this.props.toggleCapture();
    if (this.props.disabled === "" && this.props.captureText === "End Capture") {
      const currentKeyNumCombo = (this.props.keyEvents).map((key) => { return key.keyNum; });
      const body = { notes_array: currentKeyNumCombo };
      this.props.setExerciseId(this.props.user.id, body);
    }
  }

  render() {
    return (
      <div id="octRow" className="row">
        <div className="col-md-2 col-sm-4 col-xs-4">
          <button onClick={() => this.octaveShift('-')} className="btn octaveButtons btn-lg active" disabled={this.props.down} > - Octave</button>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-4">
          <button onClick={this.handleClick} className="btn octaveButtons btn-lg active" disabled={this.props.disabled}>{this.props.captureText}</button>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-4">
          <button id="rOctBut" onClick={() => this.octaveShift('+')} className="btn octaveButtons btn-lg active" disabled={this.props.up} >Octave +</button>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OctaveButtons);
