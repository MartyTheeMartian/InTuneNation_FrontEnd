import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
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

    // const style1 = {
    //   border: 'solid grey 5px',
    //   margin: '50px',
    //   padding: '0'
    // };

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/interface">
              <a href="#">
                <span className="navbar-left">Intervalicity</span>
              </a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/profile">
              <NavItem eventKey={1} href="#">
                Profile</NavItem>
            </LinkContainer>

            <LinkContainer to="/community">
              <NavItem eventKey={2} href="#">Community</NavItem>
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
            <NavItem href="" data-toggle="modal" data-target="#myModal1">
              <span className="navbar-right">Sign Up</span>
            </NavItem>
            <NavItem href="" data-toggle="modal" data-target="#myModal2" >
              <span className="navbar-right" >Log In</span>
            </NavItem>
            <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <SignUp />
                </div>
              </div>
            </div>
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
