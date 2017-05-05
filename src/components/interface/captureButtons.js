import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleAudioCapture, singButton, resetState } from '../../actions';

const mapStateToProps = (state) => {
  return {
    singText: state.singButtonReducer.singText,
    singDisabled: state.singButtonReducer.disabled,
    captureDisabled: state.captureReducer.disabled,
    captureText: state.captureReducer.captureText,
    keyStrokeEvents: state.keyStrokeEvents,
    vocalInputResults: state.vocalInputResults,
    exerciseScores: state.exerciseScores,
    greenTime: state.greenTime,
    targetNote: state.targetNote,
    targetNoteIndex: state.targetNoteIndex,
    sungNote: state.sungNote,
    recordingStatus: state.recordingStatusReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ toggleAudioCapture, singButton, resetState }, dispatch); };

class CaptureButtons extends Component {

  handleResetClick = () => {
    this.props.resetState();
  }

  // resetDisabled = () => {
  //   if (this.props.captureText === 'Capture') {
  //     return 'disabled';
  //   }
  //   else {
  //     return '';
  //   }
  // }

  handleSingClick = () => {
    this.props.toggleAudioCapture();
    this.props.singButton();
  }

  getDisabled = () => {
    if (this.props.captureDisabled === '') {
      return 'disabled';
    }
    else if (this.props.singDisabled === false) {
      return 'disabled';
    }
    // else if (this.props.singDisabled === true && this.props.captureDisabled === 'disabled') {
    //   return 'disabled';
    // }
  }

  render() {
    return (
      <div className="row">
          <div className="col-sm-6 col-md-4">
            <button onClick={this.handleSingClick} className="btn btn-primary btn-lg active" disabled={this.getDisabled()}>{this.props.singText}</button>
          </div>
          <div>
            <button onClick={this.handleResetClick} className="btn btn-primary btn-lg active" >Reset</button>
          </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CaptureButtons);
