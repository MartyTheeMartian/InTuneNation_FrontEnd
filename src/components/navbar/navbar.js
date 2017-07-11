import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogIn from '../logIn/logIn.js';
import SignUp from '../signUp/signUp.js';
import LogOut from '../logOut/logOut.js';
import { loadPastExercisesData, demoPostLogin, renderNavBar } from '../../actions';


const mapStateToProps = (state) => {
  return {
    renderNav: state.navBarReducer,
    // loginSuccess: state.loginReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadPastExercisesData, demoPostLogin, renderNavBar }, dispatch);
};

class NavBar extends Component {

  displayTabs = () => {
    if (localStorage.length === 0) {
      return { display: 'none' };
    }
    else {
      return { display: 'block' };
    }
  }

  displaySignUpLogIn = () => {
    if (localStorage.length === 0) {
      return { display: 'block' };
    }
    else {
      return { display: 'none' };
    }
  }

  displayLogOut = () => {
    if (localStorage.length === 0) {
      return { display: 'none' };
    }
    else {
      return { display: 'block' };
    }
  }

  demo = () => {
    this.props.demoPostLogin();
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          <span id="logo" className="navbar-left">InTuneNation</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          <Nav pullLeft>
            <LinkContainer exact to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>

            <LinkContainer to="/interface" style={this.displayTabs()}>
              <NavItem>Interface</NavItem>
            </LinkContainer>

            <LinkContainer to="/profile" style={this.displayTabs()}>
              <NavItem>Profile</NavItem>
            </LinkContainer>

            <LinkContainer to="/community">
              <NavItem>Community</NavItem>
            </LinkContainer>

            <Nav className="githubLink">
              <a className="githubLink" href="https://github.com/MartyTheeMartian/Intervalicity-FrontEnd/blob/master/README.md" target="_blank">GitHub</a>
            </Nav>
          </Nav>

          <Nav pullRight>
            <NavItem>
              <LinkContainer to="/interface" className="demoButton" onClick={this.demo} style={this.displaySignUpLogIn()}>
                  <span className="buttonName">Try me !</span>
              </LinkContainer>
            </NavItem>

            <NavItem id="signUpButton" data-toggle="modal"  data-target="#signUp" style={this.displaySignUpLogIn()} >
              <span className="navbar-right">Sign Up</span>
            </NavItem>
              <SignUp />
            <NavItem id="logInButton" data-toggle="modal" data-target="#logIn" style={this.displaySignUpLogIn()}>
              <span className="navbar-right">Log In</span>
            </NavItem>
              <LogIn />
            <NavItem id="logOutButton" data-toggle="modal" data-target="#logOut" style={this.displayLogOut()}>
              <span className="navbar-right">Log Out</span>
            </NavItem>
              <LogOut />

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
