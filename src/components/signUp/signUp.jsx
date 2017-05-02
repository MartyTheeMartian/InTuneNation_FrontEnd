import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signUserUp } from '../../actions';
// import { LinkContainer } from 'react-router-bootstrap';
import google_logo from '../../assets/img/google_logo.png';

const mapStateToProps = (state, ownProps) => { return state; };

const mapDispatchToProps = (dispatch) => {return bindActionCreators({ signUserUp }, dispatch); };

class SignUp extends Component {

  onSubmit = (value) => {
    const user = value;
    this.props.signUserUp(user.email, user.firstName, user.lastName, user.password);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="signup-modal">
        <button className="btn signup-modal-btn-google">
          <div className="signup-modal-btn-google-inside">
            <img src={google_logo}></img>
            <span>Sign Up with Google</span>
          </div>
        </button>

        <div className="signup-modal-or-decorate">
          <div className="signup-modal-or-decorate-lineL">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
          <span>or</span>
          <div className="signup-modal-or-decorate-lineR">>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
        </div>

        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="signup-modal-content">

            <Field name="firstName" component="input" type="text" placeholder="First Name" className="signup-modal-content-detail" required/>
            <Field name="lastName" component="input" type="text" placeholder="Last Name" className="signup-modal-content-detail" required/>
            <Field name="email" component="input" type="email" placeholder="Email" className="signup-modal-content-detail" required/>
            <Field name="password" component="input" type="password" placeholder="Password" className="signup-modal-content-detail" required/>
            <Field name="confirmPassword" component="input" type="password" placeholder="Confirm Password" className="signup-modal-content-detail" required/>
          </div>

          <div className="signup-modal-foot-btn">
            <button type="button" className="btn btn-info" type="submit">
              <h5>Sign Up</h5>
            </button>
            <button type="button" className="btn btn-default" data-dismiss="modal">
              <h5>Close</h5>
            </button>
          </div>

        </form>
      </div>
    );
  }
}

SignUp = reduxForm({ form: 'signup' })(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
