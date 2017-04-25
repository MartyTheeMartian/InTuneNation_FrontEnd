import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({}, dispatch);
};


class SignUp extends Component {

  render() {
    return (
      <div></div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);
