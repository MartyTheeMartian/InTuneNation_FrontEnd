import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { logUserIn } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logUserIn
  }, dispatch);
};

class LogIn extends Component {

  onSubmit = (value) =>{
    // value.preventDefault();
    const user = value;
    this.props.logUserIn(user.email,user.firstName, user.lastName, user.password);
  }
  // doSubmit = (e) => {
  //   e.preventDefault();
  //   this.prop.handleSubmit(e);
  // }
  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <div className="container formMargin">
          <div className="col-md-5 well well-sm row" id="signUpForm" >
            <div className="container ">
            <div className="justify-content-md-center well-sm row  logInGoogle">
              <button className="btn btn-info col-md-4">
                <h5>Login with Google</h5>
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 well well-sm orbutton">
          <h6 className="text-center">
    -------------------------- or ---------------------------
  </h6>
        </div>


        <div className="col-md-5 well well-sm row" id="signUpForm">
          <form onSubmit={handleSubmit(this.onSubmit)}  class >
            <div className="modal-body" id="personalSignup">

            <div className="row">

              <div className="row">
                <div className="col-md-4">
                  <h4>Email</h4>
                </div>
                <div className="col-md-8">
                  <Field name="email" component="input" type="email" placeholder="Email" className="col-md-12"/>
                </div>
              </div>

            <div className="row">
              <div className="col-md-4">
                <h4>Password</h4>
              </div>
              <div className="col-md-8">
                <Field name="password" component="input" type="password" placeholder="Passwords" className="col-md-12"/>
              </div>
            </div>

          </div>

            {/* <button type="submit" className="btn btn-default" >Sign Up</button> */}
            <div className="modal-footer">
              <div className="container footer ">
                <div className="row justify-content-md-center " id="submitButton" >
                  <button type="button" className="btn btn-primary col-md-4" type="submit">
                    <h5>Submit</h5>
                  </button>
                </div>
                <br/>
                <div className="row justify-content-md-center">
                  <button type="button" className="btn btn-default col-md-4 " data-dismiss="modal">
                    <h5>Close</h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>

      </div>
    )
  }
}

LogIn = reduxForm({form: 'login'})(LogIn);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
