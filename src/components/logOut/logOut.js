import React, { Component } from 'react';
import { bindActionCreators } from 'redux';


class LogOut extends Component {

  redirect = () => {
    localStorage.clear();
    window.location.assign('/');
  }

  render() {

    return (
      <div id="logOut" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog " role="document">
          <div className="modal-content">

            <div>
              <h3 className="text-center">Are you sure you want to Log Out? 🤔</h3>
            </div>
            <div className="signin-modal-foot-btn">
              <button onClick={this.redirect} type="button" className="btn btn-info" data-dismiss="modal">
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


export default LogOut;
