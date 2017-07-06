import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import Board from './championBoard.js'
import { loadUserData } from '../../actions'
const mapStateToProps = (state, ownProps) => {
  return { userData: state.communityReducer }
};
const mapDispatchToProps = (dispatch) => {
  // return { loadUserData: () => { dispatch(loadUserData) }, };
  return bindActionCreators({loadUserData}, dispatch)
};


class Community extends Component {
  constructor(props) {
    super(props);
    // this.state = { };
  }

  componentDidMount() {
    console.log('prop===',this.props.loadUserData)
    this.props.loadUserData();
  }
   render() {
    return (
      <div className="container communityWrapper">
        <div className="row">
          <div className="col-md-2 col-xs-2">
            <span>how are you</span>
          </div>
          <div className="col-md-8 col-xs-8">
            <Board/>
          </div>
          <div className="col-md-2 col-xs-2">

          </div>
        </div>
      </div>
    )
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Community);
