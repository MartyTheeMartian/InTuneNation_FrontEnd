import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import ExerciseCardList from './exerciseCardList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    exerciseScores: state.exerciseScoresReducer,
  }
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };

class ExerciseCard extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCard)
