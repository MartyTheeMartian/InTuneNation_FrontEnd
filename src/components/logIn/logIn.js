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


class LogIn extends Component {

  render() {
    return (
      <div className="row">
        <div className="container">
          <div>
            <h2 className="text-center">Log In</h2>
          </div>
          <div className="col-md-12 centered well well-lg">
            <div className="col-md-12 well well-lg">
              <h3 className="text-center">Log In with Google</h3>
            </div>
            <div className="col-md-12">
              <h4 className="text-center"> or </h4>
            </div>
            <div className="col-md-12 well well-lg">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <h3>Email</h3>
                  </div>
                  <div className="col-md-8">
                    <input></input>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <h3>Password</h3>
                  </div>
                  <div className="col-md-8">
                    <input></input>
                  </div>
                </div>
                <div className="row">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(LogIn);
