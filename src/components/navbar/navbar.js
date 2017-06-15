import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import LogIn from '../logIn/logIn.js';
import SignUp from '../signUp/signUp.js';
import LogOut from '../logOut/logOut.js';
import { loadPastExercisesData } from '../../actions';


const mapStateToProps = (state) => { return {}; };

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ loadPastExercisesData }, dispatch); };

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

            {/* <LinkContainer to="/interface" style={this.displayTabs()}> */}
            <LinkContainer to="/interface" >
              <NavItem>Interface</NavItem>
            </LinkContainer>

            {/* <LinkContainer to="/profile" style={this.displayTabs()}> */}
            <LinkContainer to="/profile">
              <NavItem>Profile</NavItem>
            </LinkContainer>

            <Nav className="githubLink">
              <a className="githubLink" href="https://github.com/MartyTheeMartian/Intervalicity-FrontEnd/blob/master/README.md" target="_blank">GitHub</a>
            </Nav>
          </Nav>

          <Nav pullRight>
              {/* <div className="fa fa-user-circle headIcon"></div> */}
            <NavItem id="signUpButton" data-toggle="modal" data-target="#signUp" style={this.displaySignUpLogIn()} >
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
