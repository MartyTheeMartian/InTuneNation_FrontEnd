import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { logUserIn, postLogIn, setAllPastExercises } from '../../actions';
import google_logo from '../../assets/img/google_logo.png';
import { Route, Redirect } from 'react-router-dom';
import RedirectClose from './redirectClose';


const mapStateToProps = (state) => {
  return {
    success: state.loginReducer.loginSuccess,
    errMsg: state.loginReducer.data,
    userId: state.loginReducer.id
  }; };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logUserIn, postLogIn, setAllPastExercises }, dispatch); };

class LogIn extends Component {

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

  displaySubmit = () => {
    if (this.props.success === true) {
      return { display: 'none' };
    }
    else {
      return { display: 'block' };
    }
  }
  onSubmit = (value) => {
    // console.log('what is value inside onSubmit', value);
    const user = value;
    this.props.postLogIn(user);
  }
  handleSwitch = () => {
    window.location.assign('https://ppp-capstone-music.herokuapp.com/auth/google/');
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;


    return (
      <div id="logIn" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="signin-modal">
              <button className="btn signin-modal-btn-google"  onClick={this.handleSwitch}>
                <div className="signin-modal-btn-google-inside">
                  <img src={google_logo}></img>
                  <span>Log In with Google</span>
                </div>
              </button>


              <div className="signin-modal-or-decorate">
                <div className="signin-modal-or-decorate-lineL">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </div>
                <span>or</span>
                <div className="signin-modal-or-decorate-lineR">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </div>
              </div>

              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="signin-modal-content">
                  <Field name="email" component="input" type="email" placeholder="Email" className="signin-modal-content-detail" required/>
                  <Field name="password" component="input" type="password" placeholder="Password" className="signin-modal-content-detail" required/>
                </div>
                <div className="signin-modal-foot-btn">
                  <button type="button" className="btn btn-info" type="submit" style={this.displaySubmit()}>
                    <h5>Log In</h5>
                  </button>
                  <div className="signin-modal-foot-btn">
                    <RedirectClose />
                  </div>
                </div>
              </form>

              <div className="alert alert-success" role="alert" style={this.displaySuccessAlert()} >
                <strong>Congrats!! &nbsp; 😄  &nbsp;</strong> Log In Successful!
              </div>

              <div className="alert alert-danger" role="alert" style={this.displayFailAlert()} >
                <strong>Warning! &nbsp; 🙁  &nbsp;</strong> Invalid log in. {this.props.errMsg} Please retry with valid inputs. Thank You.
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

let LogInWithForm = reduxForm({ form: 'login' })(LogIn);

export default connect(mapStateToProps, mapDispatchToProps)(LogInWithForm);
