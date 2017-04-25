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
      <div className="row">
        <div className="container">
          <div>
            <h2 className="text-center">Sign Up</h2>
          </div>
          <div className="col-md-12 centered well well-lg">
            <button className="btn btn-info">
              Sign Up with Google
            </button>
            <div className="col-md-12">
              <h4 className="text-center"> or </h4>
            </div>
            <div className="col-md-12 well well-lg">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <h3>First Name</h3>
                  </div>
                  <div className="col-md-8">
                    <input name="firstName" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h3>Last Name</h3>
                  </div>
                  <div className="col-md-8">
                    <input name="lastName" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h3>Email</h3>
                  </div>
                  <div className="col-md-8">
                    <input name="email" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h3>Password</h3>
                  </div>
                  <div className="col-md-8">
                    <input name="password" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-default">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);
