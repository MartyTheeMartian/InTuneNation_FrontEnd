import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// const mapStateToProps = (state, ownProps) => { return }
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ });
// }
const Community = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-xs-2">
            <span>how are you</span>
          </div>
          <div className="col-md-8 col-xs-8">
            <span>kevin is here</span>
          </div>
          <div className="col-md-2 col-xs-2">

          </div>
        </div>
      </div>
    )
};

export default Community;
