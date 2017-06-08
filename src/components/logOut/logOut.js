import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


class LogOut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      show: true,
      focus: false,
      redirect: false,
    };
  }

  redirect = () => {

    setTimeout(() => {
      this.setState({
        ...this.state,
        redirect: true
      });
    }, 900);
  }

  render() {

    if (this.state.redirect === true) {
      localStorage.clear();
      return <Redirect to="/"/>;
    }
    else {

      return (
        <div show={this.state.showModal} restoreFocus={this.state.focus} className="modal fade" id="logOut" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog " role="document">
            <div className="modal-content">

              <div>
                <h3 className="text-center">Are you sure you want to Log Out? 🤔</h3>
              </div>
              <div className="signin-modal-foot-btn">
                <button onClick={this.redirect} type="button" className="btn btn-info" type="button" data-dismiss="modal">
                  <h5>Log Out</h5>
                </button>
                <div className="signin-modal-foot-btn">
                  <button type="button" className="btn btn-default" data-dismiss="modal">
                    <h5>Cancel</h5>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
  }
}


export default connect()(LogOut);
