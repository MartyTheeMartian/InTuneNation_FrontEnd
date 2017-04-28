import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushNoteToArray,
         toggleCapture,
         toggleAudioCapture
       } from '../../actions';
import { captureReducer } from '../../reducers';

const mapStateToProps = (state, ownProps) => {
  return {
    captureText: state.captureReducer.captureText,
    disabled: state.captureReducer.disabled,
    keyStrokeEvents: state.keyStrokeEvents,
    vocalInputResults: state.vocalInputResults,
    exerciseScores: state.exerciseScores,
    greenTime: state.greenTime,
    targetNote: state.targetNote,
    targetNoteIndex: state.targetNoteIndex,
    sungNote: state.sungNote,
    recordingStatus: state.recordingStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({toggleAudioCapture, toggleCapture}, dispatch);
};

    
class CaptureButtons extends Component {

  handleClick = () =>  {
    this.props.toggleCapture();
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <button onClick={this.handleClick} className="btn btn-primary btn-lg active" disabled={this.props.disabled}>{this.props.captureText}</button>
          <div className="col-md3">
            <button onClick={this.props.toggleAudioCapture} className="btn btn-primary btn-lg active">Toggle Audio Input</button>
          </div>
            <p>
              Recording Status: { this.props.recordingStatus }
            </p>
          </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(CaptureButtons);
