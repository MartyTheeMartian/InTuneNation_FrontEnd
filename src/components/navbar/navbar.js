import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
            <Link to="/interface">
              <button className="btn btn-primary btn-lg active">Back</button>
            </Link>
            <Link to="/profile">
              <button className="btn btn-primary btn-lg active">Profile</button>
            </Link>
            <Link to="/community">
              <button className="btn btn-primary btn-lg active">Community</button>
            </Link>
          </div>

          <div className="navbar-header col-md-4">
            <h1 className="text-center">Intervalicity</h1>
          </div>
          <div className="col-md-2">
            <Link to="/signup">
              <button className="btn btn-primary btn-lg active">Sign-Up</button>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/login">
              <button className="btn btn-primary btn-lg active">Log-In</button>
            </Link>
          </div>
        </div>
      </div>

    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(NavBar);
