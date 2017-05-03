import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shiftOctaves, toggleCapture } from '../../actions';

const mapStateToProps = (state) => {
  return {
    captureText: state.captureReducer.captureText,
    disabled: state.captureReducer.disabled,
    octave: state.octaveReducer.current,
    up: state.octaveReducer.up,
    down: state.octaveReducer.down,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ shiftOctaves, toggleCapture }, dispatch);
};


class OctaveButtons extends Component {

  octaveShift = (direction) => {
    this.props.shiftOctaves(direction);
  }

  capture = () =>  {
    this.props.toggleCapture();
  }

  render() {
    return (
      <div id="octRow" className="row">
        <div className="col-md-2 col-sm-4">
          <button onClick={() => this.octaveShift('-')} className="btn btn-primary btn-lg active" disabled={this.props.down} > - Octave</button>
        </div>
        <div className="col-md-2 col-sm-4">
          <button onClick={this.capture} className="btn btn-info btn-lg active" disabled={this.props.disabled}>{this.props.captureText}</button>
        </div>
        <div className="col-md-2 col-sm-4">
          <button id="rOctBut" onClick={() => this.octaveShift('+')} className="btn btn-primary btn-lg active" disabled={this.props.up} >Octave +</button>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OctaveButtons);
