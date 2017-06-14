import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleAudioCapture, singButton, resetState } from '../../actions';

const mapStateToProps = (state) => {
  return {
    resetDisabled: state.captureReducer.resetDisabled,
    singText: state.singButtonReducer.singText,
    singDisabled: state.singButtonReducer.disabled,
    captureDisabled: state.captureReducer.disabled,
    captureText: state.captureReducer.captureText,
    // keyStrokeEvents: state.keyStrokeEvents,
    // vocalInputResults: state.vocalInputResults,
    // exerciseScores: state.exerciseScores,
    // greenTime: state.greenTime,
    // targetNote: state.targetNote,
    // targetNoteIndex: state.targetNoteIndex,
    // sungNote: state.sungNote,
    // recordingStatus: state.recordingStatusReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ toggleAudioCapture, singButton, resetState }, dispatch); };

class SingButtons extends Component {

  handleResetClick = () => { this.props.resetState(); }

  handleSingClick = () => {
    this.props.toggleAudioCapture();
    this.props.singButton();
  }

  getDisabled = () => {
    if (this.props.captureDisabled === '') { return 'disabled'; }
    else if (this.props.singDisabled === false) { return 'disabled'; }
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 col-sm-6 col-xs-5">
            <button onClick={this.handleSingClick} className="btn btn-lg active captureBox" disabled={this.getDisabled()}>{this.props.singText}</button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 col-sm-6 col-xs-5">
            <button onClick={this.handleResetClick} className="btn btn-lg active captureBox" disabled={this.props.resetDisabled} >RESET</button>
          </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SingButtons);
