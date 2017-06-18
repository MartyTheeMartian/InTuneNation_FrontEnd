import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    captureIsDisabled: (state.captureReducer.disabled === 'disabled'),
    keyEvents: state.keyEventsReducer,
    targetNote: state.targetNoteReducer,
    targetNoteIndex: state.targetNoteIndexReducer,
    currentScore: state.scoreReducer,
    exerciseScores: state.exerciseScoresReducer,
    greenTime: state.greenTimeReducer,
    recordingStatus: state.recordingStatusReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };

const renderKeyEventIds = (keyEvents, targetNoteIndex, disabled, recStatus) => {
  if (keyEvents) {
    return keyEvents.map((item, index) => {
      if (recStatus && index === targetNoteIndex) {
        return <th className="currentTarget">{ index + 1 }</th>
      } else { return <th>{ index + 1 }</th>; }
    });
  }
  return '';
};

const renderTargetNotes = (keyEvents, targetNoteIndex, disabled, recStatus) => {
  if (keyEvents) {
    return keyEvents.map((item, index) => {
      if (recStatus && index === targetNoteIndex) {
        return <th className="currentTarget">{ item.noteName }</th>;
      } else {
        return <th>{ item.noteName }</th>;
      }
    });
  }
};

const renderGreenTime = (keyEvents, targetNoteIndex, greenTime, recStatus) => {
  if (keyEvents) {
    return keyEvents.map((item, index) => {
      if (index > targetNoteIndex) { return <th>0</th>; }
      else if (index === targetNoteIndex) {
        if (recStatus) {
          return <th className="currentTarget">{greenTime.accumulated}</th>;
        } else {
          return <th>{greenTime.accumulated}</th>;
        }
      }
      else if (index < targetNoteIndex) { return <th>{greenTime.required}</th>; }
    });
  }
}

const renderScores = (keyEvents, exerciseScores, targetNoteIndex, currentScore, disabled, recStatus) => {
  if (keyEvents) {
    return keyEvents.map((item, index) => {
      if (exerciseScores[index] !== undefined) {
        return <th>{ exerciseScores[index] }</th>;
      }
      if (index === targetNoteIndex) {
        const target = <th className="currentTarget">{ currentScore }</th>;
        const passive = <th>{ currentScore }</th>;
        if (recStatus) { return target; }
        return passive;
      }
      return <th>100</th>;
    });
  }
};

class TargetNoteScoreTable extends Component {
  render() {
    return (
      <div className="noteScoresTable">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Note #</th>
              {renderKeyEventIds(this.props.keyEvents, this.props.targetNoteIndex, this.props.captureIsDisabled, this.props.recordingStatus)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Target</th>
              {renderTargetNotes(this.props.keyEvents, this.props.targetNoteIndex, this.props.captureIsDisabled, this.props.recordingStatus)}
            </tr>
            <tr>
              <th>Green Time</th>
              {renderGreenTime(this.props.keyEvents, this.props.targetNoteIndex, this.props.greenTime, this.props.recordingStatus)}
            </tr>
            <tr>
              <th>Score</th>
              {renderScores(this.props.keyEvents, this.props.exerciseScores, this.props.targetNoteIndex, this.props.currentScore, this.props.captureIsDisabled, this.props.recordingStatus)}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetNoteScoreTable);
