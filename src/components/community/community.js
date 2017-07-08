import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import Board from './championBoard.js'
import { averageScore } from '../../actions'
const mapStateToProps = (state, ownProps) => {
  return {  average: state.averageScoreReducer }
};
const mapDispatchToProps = (dispatch) => {
  return {
    averageScore: () => { dispatch(averageScore())} };
  // return bindActionCreators({loadUserData}, dispatch)
};


class Community extends Component {
  constructor(props) {
    super(props);
    // this.state = { };
  }

  componentDidMount() {
    // console.log('prop===',this.props.loadUserData)
    this.props.averageScore();
    // this.props.loadUserData();
    // console.log('this.props.userData',this.props.userData)
  }
   render() {
    return (
      <div className="container communityWrapper">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-sm-8 col-sm-offset-2">
            <Board data={this.props.average}/>
          </div>
        </div>
      </div>
    )
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Community);
