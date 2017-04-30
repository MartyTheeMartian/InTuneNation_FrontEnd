import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => {
  return {
    currentNote: state.currentNoteReducer,
    octave: state.octaveReducer.current,
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


class TargetNoteIndicator extends Component {


  render() {

    return (
      <div className="container">
        <div className="row">
          <div>
            <h3>Target Note</h3>
          </div>
          <div style={style}>{this.props.currentNote}</div>
          <div>
            <span>Octave {this.props.octave}</span>
          </div>
        </div>
      </div>
    );
  }

}

let style = {backgroundColor: ''};

export default connect (mapStateToProps, mapDispatchToProps)(TargetNoteIndicator);
