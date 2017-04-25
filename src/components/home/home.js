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


class Home extends Component {

  render() {
    return (
      <div className="row">
        <div className="container"></div>
      </div>
    );
  }


}

export default connect (mapStateToProps, mapDispatchToProps)(Home);
