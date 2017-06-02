import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import LogIn from '../logIn/logIn.js';
import SignUp from '../signUp/signUp.js';
// import music from '../../assets/img/music.jpg'
// import profile from '../../assets/img/profile-icon.png'


const mapStateToProps = (state) => { return state; };

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };

class NavBar extends Component {

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
          <Nav pullRight>
            <LinkContainer exact to="/">
              <NavItem href="#">Home</NavItem>
            </LinkContainer>

            <LinkContainer to="/interface">
              <NavItem href="#">Interface</NavItem>
            </LinkContainer>

            <LinkContainer to="/profile">
              <NavItem href="#">Profile</NavItem>
            </LinkContainer>

            <NavItem id="signButton" href="" data-toggle="modal" data-target="#myModal1">
              <span className="navbar-right">Sign Up</span>
            </NavItem>
            <NavItem id="logButton" href="" data-toggle="modal" data-target="#myModal2" >
              <span className="navbar-right" >Log In</span>
            </NavItem>
              <SignUp />
              <LogIn />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
