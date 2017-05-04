import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


import { logUserIn, postLogIn, setAllPastExercises } from '../../actions';

import google_logo from '../../assets/img/google_logo.png';

const mapStateToProps = (state) => {
  return {
    userId: state.loginReducer.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logUserIn, postLogIn, setAllPastExercises }, dispatch); };

class LogIn extends Component {

  onSubmit = (value) => {
    const user = value;
    this.props.postLogIn(user);
    console.log(this.props.userId);
    this.props.setAllPastExercises(this.props.userId);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (

      <div className="signin-modal">
        <button className="btn signin-modal-btn-google">
          <div className="signin-modal-btn-google-inside">
            <img src={google_logo}></img>
            <span>Log in with Google</span>
          </div>
        </button>

        <div className="signin-modal-or-decorate">
          <div className="signin-modal-or-decorate-lineL">
            >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          </div>
          <span>or</span>
          <div className="signin-modal-or-decorate-lineR">
            >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          </div>
        </div>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="signin-modal-content">
            <Field name="email" component="input" type="email" placeholder="Email" className="signin-modal-content-detail" required/>
            <Field name="password" component="input" type="password" placeholder="Password" className="signin-modal-content-detail" required/>
          </div>
          <div className="signin-modal-foot-btn">
            <button type="button" className="btn btn-info" type="submit">
              <h5>Sign in</h5>
            </button>
            <div className="signin-modal-foot-btn">
              <button type="button" className="btn btn-default  " data-dismiss="modal">
                <h5>Close</h5>
              </button>
            </div>
          </div>
        </form>

      </div>
    );
  }
}

let LogInWithForm = reduxForm({ form: 'login' })(LogIn);

export default connect(null, mapDispatchToProps)(LogInWithForm);
