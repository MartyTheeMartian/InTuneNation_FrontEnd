import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    currentPianoNote: state.currentPianoNoteReducer,
    octave: state.octaveReducer.current,
    // vocalInputResults: state.vocalInputResults,
    sungNote: state.sungNoteReducer,
    recordingStatus: state.recordingStatus,
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

  displayPianoNotes = () => {
    console.log(this.props.currentPianoNote);
    if (this.props.recordingStatus !== true) {
      return this.props.currentPianoNote;
    }
  }

  render() {
    return (
      <div>
        <div className="panel panel-default noteScoreIndicatorsBorder">
          <div className="caption noteScoreIndicatorsText">
            {/* Piano Note -> You Are Singing */}
            <h4>{this.props.currentText}</h4>
          </div>
          <div className="panel-body">
            <h2>{this.renderSungNote(this.props.sungNote)}</h2>
            <h2>{this.displayPianoNotes()}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NoteIndicator);
