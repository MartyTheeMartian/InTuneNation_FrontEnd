import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {signUserUp} from '../../actions';
import {LinkContainer} from 'react-router-bootstrap';

const mapStateToProps = (state, ownProps) => {
  console.log('what is state in store?', state);
  return {
    // formData: state.signupForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signUserUp
  }, dispatch);
};

class SignUp extends Component {

  onSubmit = (value) => {
    console.log('what is value?', value);
    // event.preventDefault();
    const user = value;
    this.props.signUserUp(user.email, user.firstName, user.lastName, user.password);
    // console.log('did prop,', this.props);
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <div>
              <button className="btn btn-info col-md-5">
                <h4>Sign Up with Google</h4>
              </button>


          <h6 className="text-center">
            OR
          </h6>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="modal-body" id="personalSignup">

                  <h4>First Name</h4>
                  <Field name="firstName" component="input" type="text" placeholder="First Name" className="col-md-12"/>
                  <h4>Last Name</h4>
                  <Field name="lastName" component="input" type="text" placeholder="Last Name" className="col-md-12"/>
                  <h4>Email</h4>
                  <Field name="email" component="input" type="email" placeholder="Email" className="col-md-12"/>
                  <h4>Password</h4>
                  <Field name="password" component="input" type="password" placeholder="Passwords" className="col-md-12"/>
                  <h4>Confirm Password</h4>
                  <Field name="confirmPassword" component="input" type="password" placeholder="Confirm passwords" className="col-md-12"/>
            </div>

            {/* <button type="submit" className="btn btn-default" >Sign Up</button> */}
            <div className="modal-footer">
              <div className="container footer ">
                <div className="row justify-content-md-center " id="submitButton">
                  <button type="button" className="btn btn-primary col-md-7" type="submit">
                    <h5>Submit</h5>
                  </button>
                </div>
                <br/>
                <div className="row justify-content-md-center">
                  <button type="button" className="btn btn-default col-md-7 " data-dismiss="modal">
                    <h5>Close</h5>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}
SignUp = reduxForm({form: 'signup'})(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
