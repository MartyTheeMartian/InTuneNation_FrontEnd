import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import LogIn from '../logIn/logIn';
import SignUp from '../signUp/signUp';
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
            <span className="navbar-left">InTuneNation</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <LinkContainer exact to="/">
              <NavItem href="#">Home</NavItem>
            </LinkContainer>

            <LinkContainer to="/interface">
              <NavItem href="#">Interface</NavItem>
            </LinkContainer>

            <LinkContainer to="/profile">
              <NavItem href="#">
                Profile</NavItem>
            </LinkContainer>

            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Sign up</MenuItem>
              <MenuItem eventKey={3.2}>Log in</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
          <Nav pullRight>
              {/* <div className="fa fa-user-circle headIcon"></div> */}
            <NavItem id="signButton" href="" data-toggle="modal" data-target="#myModal1">
              <span className="navbar-right">Sign Up</span>
            </NavItem>
            <NavItem id="logButton" href="" data-toggle="modal" data-target="#myModal2" >
              <span className="navbar-right" >Log In</span>
            </NavItem>
              <SignUp />
            <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog " role="document">
                <div className="modal-content">
                  <LogIn />
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
