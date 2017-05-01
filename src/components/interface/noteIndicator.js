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


class NoteIndicator extends Component {


  render() {

    return (
      <div className="col-sm-3 col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Currently Sung Note</h4>
          </div>
          <div className="panel-body">
            <h2>{this.props.currentNote}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">{this.props.octave}</span>
                Octave
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }

}

let style = { backgroundColor: '' };

export default connect (mapStateToProps, mapDispatchToProps)(NoteIndicator);
