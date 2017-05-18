import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { postSignUp } from '../../actions';
import { Route, Redirect } from 'react-router-dom';
// import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
// import { LinkContainer } from 'react-router-bootstrap';

import google_logo from '../../assets/img/google_logo.png';

const mapStateToProps = (state) => {
  return {
    success: state.signupReducer.signupSuccess,
    errMsg: state.signupReducer.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postSignUp }, dispatch);
};

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      showModal: true,
      focus: false,
      force: false
    };
  }

  displaySuccessAlert = () => {
    if (this.props.success === true) {
      return { display: 'block' };
    }
    else {
      return { display: 'none' };
    }
  }

  displayFailAlert = () => {
    if (this.props.success === false) {
      return { display: 'block' };
    }
    else {
      return { display: 'none' };
    }
  }

  disabled = () => {
    if (this.props.success === true) {
      return 'disabled';
    }
    else {
      return '';
    }
  }

  redirect = () => {
    if (this.props.success === true) {

      setTimeout(() => {
        this.setState({
          ...this.state,
          showModal: false,
          focus: true
        });
      }, 700);

      setTimeout(() => {
        this.setState({
          ...this.state,
          force: true
        });
      }, 900);
    }
  }

  onSubmit = (value) => {
    const user = value;
    const info = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    };
    this.props.postSignUp(info);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    if (this.state.force === true) {
      return <Redirect to="/interface"/>;
    }
    else {
      return (
        <div show={this.state.showModal} restoreFocus={this.state.focus} className="modal fade" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="signup-modal">
                <button className="btn signup-modal-btn-google">
                  <div className="signup-modal-btn-google-inside">
                    <img src={google_logo}></img>
                    <span>Sign Up with Google</span>
                  </div>
                </button>

                <div className="signup-modal-or-decorate">
                  <div className="signup-modal-or-decorate-lineL">
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  </div>
                  <span>or</span>
                  <div className="signup-modal-or-decorate-lineR">
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  </div>
                </div>

                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <div className="signup-modal-content">

                    <Field name="firstName" component="input" type="text" placeholder="First Name" className="signup-modal-content-detail" required/>
                    <Field name="lastName" component="input" type="text" placeholder="Last Name" className="signup-modal-content-detail" required/>
                    <Field name="email" component="input" type="email" placeholder="Email" className="signup-modal-content-detail" required/>
                    <Field name="password" component="input" type="password" placeholder="Password" className="signup-modal-content-detail" required/>
                    <Field name="confirmPassword" component="input" type="password" placeholder="Confirm Password" className="signup-modal-content-detail" required/>
                  </div>

                  <div className="signup-modal-foot-btn">
                    <button disabled={this.disabled()} type="button" className="btn btn-info" type="submit" >
                      <h5>Sign Up</h5>
                    </button>
                    <button onClick={this.redirect} type="button" className="btn btn-default" data-dismiss="modal">
                      <h5>Close</h5>
                    </button>
                  </div>

                </form>

                <div className="alert alert-success" role="alert" style={this.displaySuccessAlert()} >
                  <strong>Congrats!! &nbsp; 😄  &nbsp;</strong> Sign Up Successful!
                </div>

                <div className="alert alert-danger" role="alert" style={this.displayFailAlert()} >
                  <strong>Warning! &nbsp; 🙁  &nbsp;</strong> Invalid form submission. {this.props.errMsg} Please retry with valid inputs. Thank You.
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

let SignUpWithForm = reduxForm({ form: 'signup' })(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWithForm);
