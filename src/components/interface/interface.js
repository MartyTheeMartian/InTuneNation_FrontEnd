import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OctaveButtons from './octaveButtons';
import NoteIndicator from './noteIndicator';
import TargetNoteIndicator from './targetNoteIndicator';
import TuningIndicator from './tuningIndicator';
import Piano from './piano';
import CaptureButtons from './captureButtons';
import ScoreBox from './scoreBox';

// import ReactWebAudio from 'react-webaudio';
// var ReactWebAudio = require('react-webaudio')
// import Mike from '../../../../vendors/mike-js/index.js';
// import PitchAnalyzer from '../../../../vendors/pitch-js/src/pitch.js';

const mapStateToProps = (state/* , ownProps */) => {
  return {
    keyStrokeEvents: state.keyStrokeEventsReducer,
    vocalInputResults: state.vocalInputResultsReducer,
    exerciseScores: state.exerciseScoresReducer,
    greenTime: state.greenTimeReducer,
    targetNote: state.targetNoteReducer,
    targetNoteIndex: state.targetNoteIndexReducer,
    sungNote: state.sungNoteReducer,
    recordingStatus: state.recordingStatusReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };


class Interface extends Component {
  render() {
    return (
      <div className="container">
        <OctaveButtons />
        <div className="row">
          <Piano />
          <TuningIndicator />
        </div>
        <div className="row">
          <NoteIndicator />
          <TargetNoteIndicator />
          <ScoreBox />
        </div>
        <CaptureButtons />
      </div>
    );
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
