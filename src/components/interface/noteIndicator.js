import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    currentNote: state.currentNoteReducer,
    octave: state.octaveReducer.current,
    keyStrokeEvents: state.keyStrokeEvents,
    vocalInputResults: state.vocalInputResults,
    exerciseScores: state.exerciseScores,
    greenTime: state.greenTime,
    targetNote: state.targetNote,
    targetNoteIndex: state.targetNoteIndex,
    sungNote: state.sungNoteReducer,
    recordingStatus: state.recordingStatus,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };

const renderSungNote = (note) => {
  if (note === undefined) { return "Start singing!"; }
  return note.name;
}

class NoteIndicator extends Component {
  render() {
    return (
      <div className="col-sm-3 col-md-3 col-xs-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Currently Sung Note</h4>
          </div>
          <div className="panel-body">
            <h2>{renderSungNote(this.props.sungNote)}</h2>

          </div>
        </div>
      </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(NoteIndicator);
