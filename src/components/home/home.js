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
        <div className="container">
          <h1 className="text-center">Intervalicity</h1>
          <h3 className="text-center">Sing In The Moment</h3>
        </div>
      </div>
    );
  }


}

export default connect (mapStateToProps, mapDispatchToProps)(Home);
