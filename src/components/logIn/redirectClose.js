import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    success: state.loginReducer.loginSuccess
  }; };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({  }, dispatch); };


class RedirectClose extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  redirect = () => {
    this.setState({
      redirect: true
    });
  }

  render() {

    if (this.state.redirect === true) {
      return <Redirect to="/interface"/>;
    }
    if (this.props.success === true) {
      return (
        <button onClick={this.redirect} type="button" className="btn btn-info" data-dismiss="modal">
          <h5>Enter</h5>
        </button>
      );
    }
    else if (this.props.sucess !== true) {
      return (
        <button type="button" className="btn btn-default" data-dismiss="modal">
          <h5>Close</h5>
        </button>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectClose);
