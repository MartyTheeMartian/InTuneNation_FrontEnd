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


class Profile extends Component {

  render() {
    return (
      <div></div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(Profile);
