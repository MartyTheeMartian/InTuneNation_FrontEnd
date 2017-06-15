import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getDisplayableNote from '../../audio/sungNoteForDisplay';


const mapStateToProps = (state) => {
  return {
    currentPianoNote: state.currentPianoNoteReducer,
    octave: state.octaveReducer.current,
    sungNote: state.sungNoteReducer,
    recordingStatus: state.recordingStatusReducer,
  };
};


class NoteIndicator extends Component {

  displayNote = () => {
    if (this.props.recordingStatus !== true) {
      return this.props.currentPianoNote;
    }
    else {
      if (this.props.sungNote.name) {
        return getDisplayableNote(this.props.sungNote.name);
      }
    }
  }

  displayText = () => {
    if (this.props.recordingStatus) {
      return 'You Are Singing';
    }
    else {
      return 'Piano Note';
    }
  }

  render() {
    return (
      <div>
        <div className="panel-body">
          <h4>{this.displayText()}</h4>
          <h2 id="current-note">{this.displayNote()}</h2>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NoteIndicator);
