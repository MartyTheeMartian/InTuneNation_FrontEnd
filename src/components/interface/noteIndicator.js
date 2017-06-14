import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    currentPianoNote: state.currentPianoNoteReducer,
    octave: state.octaveReducer.current,
    // vocalInputResults: state.vocalInputResults,
    sungNote: state.sungNoteReducer,
    // recordingStatus: state.recordingStatus,
  };
};

// const renderSungNote = (note) => {
//   if (note === undefined) { return "Start singing!"; }
//   return note.name;
// };

class NoteIndicator extends Component {

  renderSungNote = (note) => {
    if (note === undefined) { return "Start singing!"; }
    return note.name;
  }

  render() {
    return (
      <div>
        <div className="panel panel-default noteScoreIndicatorsBorder">
          <div className="caption noteScoreIndicatorsText">
            <h4>Current Note</h4>
          </div>
          <div className="panel-body">
            <h2>{this.renderSungNote(this.props.sungNote)}</h2>
            <h2>{this.props.currentPianoNote}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NoteIndicator);
