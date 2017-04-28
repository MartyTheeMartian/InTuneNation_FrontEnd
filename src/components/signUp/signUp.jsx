import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { signUserUp } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.signupForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signUserUp}, dispatch);
};


class SignUp extends Component {

  onSubmit(props) {
    console.log('what is form', this.state);
    event.preventDefault();
    const user = this.props;
    this.props.signUserUp(user.email, user.firstName, user.lastName, user.password);
    }

  render() {
    // handleSubmit(e) {
      //do stuff here
    // }
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <div className="container">
        {/* <div>
            <h2 className="text-center">Sign Up</h2>
          </div> */}
        <div className="col-md-9 centered well well-lg">
          <button type="button" class="close " data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div>
            <button className="btn btn-info">
              Sign Up with Google
            </button>
          </div>
          <div className="col-md-9">
            <h4 className="text-center">
              or
            </h4>
          </div>
          <div className="col-md-12 well well-lg">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="row">
                <div className="col-md-4">
                  <h5>First Name</h5>
                </div>
                <div className="col-md-8">
                  <input name="firstName" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h5>Last Name</h5>
                </div>
                <div className="col-md-8">
                  <input name="lastName" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h5>Email</h5>
                </div>
                <div className="col-md-8">
                  <input name="email" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h5>Password</h5>
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
    );
  }
}
SignUp = reduxForm({ form: 'signup', })(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
