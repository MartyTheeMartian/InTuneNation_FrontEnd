import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


class RedirectClose extends Component {

  constructor(props) {
    super(props);
    this.state = { redirect = false };
  }

  redirect = () => {
    if (this.props.success === true) {
      this.setState({
        redirect = true
      });
    }
  }

  render() {
    console.log(this.props);
    if (this.props.success === true) {
      return (
        <button onClick={this.redirect} type="button" className="btn btn-default" data-dismiss="modal">
          <h5>Enter</h5>
        </button>
      );
    }
    else {
      return (
        <button onClick={this.redirect} type="button" className="btn btn-default" data-dismiss="modal">
          <h5>Close</h5>
        </button>
      );
    }
  }
}

export default RedirectClose;
