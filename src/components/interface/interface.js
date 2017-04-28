import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OctaveButtons from './octaveButtons';
import NoteIndicator from './noteIndicator';
import TuningIndicator from './tuningIndicator';
import Piano from './piano';
import CaptureButtons from './captureButtons';

// import ReactWebAudio from 'react-webaudio';
// var ReactWebAudio = require('react-webaudio')
// import Mike from '../../../../vendors/mike-js/index.js';
// import PitchAnalyzer from '../../../../vendors/pitch-js/src/pitch.js';



const mapStateToProps = (state, ownProps) => {
  return {
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
  return bindActionCreators ({}, dispatch);
};


class Interface extends Component {

  render() {
    return (
      <div className="container">
        <OctaveButtons />
        <Piano />
        <NoteIndicator />
        <TuningIndicator />
        <CaptureButtons />
      </div>
    );
  }


}

export default connect (mapStateToProps, mapDispatchToProps)(Interface);
