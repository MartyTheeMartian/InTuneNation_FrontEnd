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
      <div className="col-sm-4 col-md-4">
        <div class="thumbnail">
          <div class="caption">
            <h4>Target Note</h4>
            <div style={style}>
              <h2>{this.props.currentNote}</h2>
            </div>
            <div>
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="badge">{this.props.octave}</span>
                  Octave
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

let style = {backgroundColor: ''};

export default connect (mapStateToProps, mapDispatchToProps)(TargetNoteIndicator);
