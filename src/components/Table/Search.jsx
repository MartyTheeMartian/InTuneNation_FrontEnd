import React, { Component } from 'react';

import { connect } from 'react-redux';
import { doSearchExercises } from  '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {

  return {
    value: state.searchExercise
  }
}

const mapDispatchToprops = (dispatch) => {
  return bindActionCreators({ doSearchExercises }, display);
}

class SearchExercise extends Compoent {
  render() {

    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.doSearchExercises();
      }}
      >
        <button type="submit">
          Search All Past Exercise!
        </button>


      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchExercise);
