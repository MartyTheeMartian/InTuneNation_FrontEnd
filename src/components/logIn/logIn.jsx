import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {logUserIn} from '../../actions';
import google_logo from '../../assets/img/google_logo.png';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logUserIn
  }, dispatch);
};

class LogIn extends Component {

  onSubmit = (value) => {
    // value.preventDefault();
    const user = value;
    this.props.logUserIn(user.email, user.password);
  }
  // doSubmit = (e) => {
  //   e.preventDefault();
  //   this.prop.handleSubmit(e);
  // }
  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;

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
            you shouldn't see this long long string
          </div>
          <span>or</span>
          <div className="signin-modal-or-decorate-lineR">
            you shouldn't see this long long string
          </div>
        </div>

        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="signin-modal-content">
            <Field name="email" component="input" type="email" placeholder="Email" className="signin-modal-content-detail" required/>
            <Field name="password" component="input" type="password" placeholder="Passwords" className="signin-modal-content-detail" required/>
          </div>
          <div className="signin-modal-foot-btn">
            <button type="button" className="btn btn-danger " type="submit">
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

LogIn = reduxForm({form: 'login'})(LogIn);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
