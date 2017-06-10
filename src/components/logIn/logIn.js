import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { logUserIn, postLogIn, setAllPastExercises } from '../../actions';
import google_logo from '../../assets/img/google_logo.png';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    success: state.loginReducer.loginSuccess,
    errMsg: state.loginReducer.data,
    userId: state.loginReducer.id
  }; };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logUserIn, postLogIn, setAllPastExercises }, dispatch); };

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      backdrop: true,
      redirect: false,
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
          backdrop: true,
          redirect: true
        });
      }, 300);

    }
  }

  onSubmit = (value) => {
    const user = value;
    this.props.postLogIn(user);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    if (this.state.redirect === true) {
      return <Redirect to="/interface"/>;
    }
    else {

      return (
        <div data-show={this.props.show} data-backdrop={this.state.backdrop} className="modal fade" id="logIn" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="signin-modal">
                <button className="btn signin-modal-btn-google">
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
                    <button disabled={this.disabled()} type="button" className="btn btn-info" type="submit" >
                      <h5>Log In</h5>
                    </button>
                    <div className="signin-modal-foot-btn">
                      <button onClick={this.redirect} type="button" className="btn btn-default" data-dismiss="modal">
                        <h5>Close</h5>
                      </button>
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
}

let LogInWithForm = reduxForm({ form: 'login' })(LogIn);

export default connect(mapStateToProps, mapDispatchToProps)(LogInWithForm);
