import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    capture: state.captureReducer,
    keyEvents: state.keyEventsReducer,
    targetNote: state.targetNoteReducer,
    targetNoteIndex: state.targetNoteIndexReducer,
    currentScore: state.scoreReducer,
    exerciseScores: state.exerciseScoresReducer,
  };
};

const mapDispatchToProps = (dispatch) => { bindActionCreators({}, dispatch); };

const renderKeyEventIds = (keyEvents, targetNoteIndex, disableStr) => {
  if (keyEvents) {
    return keyEvents.map((item, index) => {
      if (index === targetNoteIndex) {
        const target = <th className="currentTarget">{ index + 1 }</th>;
        const passive = <th>{ index + 1 }</th>;
        if (disableStr === 'disabled') { return target; } else { return passive; }
      }
      return <th>{ index + 1 }</th>;
    });
  }
  return '';
};

const renderTargetNotes = (keyEvents, targetNoteIndex, disableStr) => {
  if (keyEvents) {
    return keyEvents.map((item, index) => {
      if (index === targetNoteIndex) {
        const target = <th className="currentTarget">{ item.noteName }</th>;
        const passive = <th>{ item.noteName }</th>;
        if (disableStr === 'disabled') { return target; } else { return passive; }
      }
      return <th>{ item.noteName }</th>;
    });
  }
};

const renderScores = (keyEvents, exerciseScores, targetNoteIndex, currentScore, disableStr) => {
  if (keyEvents) {
    return keyEvents.map((item, index) => {
      if (exerciseScores[index] !== undefined) {
        return <th>{ exerciseScores[index] }</th>;
      }
      if (index === targetNoteIndex) {
        const target = <th className="currentTarget">{ currentScore }</th>;
        const passive = <th>{ currentScore }</th>;
        if (disableStr === 'disabled') { return target; } else { return passive; }
      }
      return <th>100</th>;
    });
  }
}

class TargetNoteScoreTable extends Component {
  render() {
    return (
      <div id="noteScores">
        <table className="talbe table-bordered">
          <thead>
            <tr>
              <th>#</th>
              {renderKeyEventIds(this.props.keyEvents, this.props.targetNoteIndex, this.props.capture.disabled)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Target</th>
              {renderTargetNotes(this.props.keyEvents, this.props.targetNoteIndex, this.props.capture.disabled)}
            </tr>
            <tr>
              <th>Score</th>
              {renderScores(this.props.keyEvents, this.props.exerciseScores, this.props.targetNoteIndex, this.props.currentScore, this.props.capture.disabled)}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetNoteScoreTable);
