import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentScore: state.scoreReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };


class ScoreBox extends Component {
  render() {
    return (
      <div className="col-sm-3 col-md-3">
        <div className="thumbnail">
          <div className="caption">
            <h4>Current Score</h4>
            <h3>{this.props.currentScore}</h3>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBox);
