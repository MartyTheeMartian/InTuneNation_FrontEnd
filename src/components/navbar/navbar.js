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


class NavBar extends Component {

  render() {
    return (

      <div className="navbar navbar-default">
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary btn-lg active">Back</button>
            <button className="btn btn-primary btn-lg active">Profile</button>
          </div>

          <div className="navbar-header col-md-4">
            <h1 className="text-center">Intervalicity</h1>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary btn-lg active">Sign-Up</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary btn-lg active">Log-In</button>
          </div>
        </div>
      </div>

    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(NavBar);
