import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    currentNote: state.currentNoteReducer,
    octave: state.octaveReducer.current,
    vocalInputResults: state.vocalInputResults,
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

  render() {
    return (
      <div className="col-sm-3 col-md-3 col-xs-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Current Note</h4>
          </div>
          <div className="panel-body">
            <h2>{this.renderSungNote(this.props.sungNote)}</h2>
            <h2>{this.props.currentNote}</h2>
            <li className="list-group-item">
              Octave
                <span className="badge">{this.props.octave}</span>
              </li>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NoteIndicator);
