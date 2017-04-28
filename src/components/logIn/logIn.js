import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class LogIn extends Component {

  handleSubmit = (e) =>{
    e.preventDefault();
  }
  // doSubmit = (e) => {
  //   e.preventDefault();
  //   this.prop.handleSubmit(e);
  // }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props
    return (
      <div className="row">
        <div className="container">
          {/* <div>
           <h2 className="text-center">Log In</h2>
         </div> */}
          <div className="col-md-9 centered well well-lg">
            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div>
              <button className="btn btn-info">
                Log In with Google
              </button>
            </div>

            <div className="col-md-9">
              <h4 className="text-center">
                or
              </h4>
            </div>
            <div className="col-md-12 well well-lg">
              <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="row">
                  <div className="col-md-4">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-6">
                    <input name="email" type="email" className="form-control"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h5>Password</h5>
                  </div>

                  <div className="col-md-6">
                    <input name="password" type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" disabled={pristine || submitting} className="btn btn-default">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

LogIn = reduxForm({form: 'login'})(LogIn);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
