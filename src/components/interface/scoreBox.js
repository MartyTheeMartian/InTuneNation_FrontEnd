import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { currentScore: state.scoreReducer };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };


class ScoreBox extends Component {
  render() {
    return (
      <div className="col-sm-3 col-md-3 col-xs-4">
        <div className="thumbnail noteScoreIndicatorsBorder noteScoreIndicatorsText">
          <div className="caption">
            <h4 className="noteScoreIndicatorsText">Current Score</h4>
            <h3 className="noteScoreIndicatorsText">{this.props.currentScore}</h3>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBox);
