import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => {
  return {
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


class NoteIndicator extends Component {



  render() {

    let style = {backgroundColor: 'red'};

    return (
      <div className="container">
        <div style={style}>{this.props.note}</div>
        <div className="row">
          <span>Octave</span>
        </div>
      </div>
    );
  }


}

export default connect (mapStateToProps, mapDispatchToProps)(NoteIndicator);
