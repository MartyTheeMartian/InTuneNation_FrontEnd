import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import LogIn from '../logIn/logIn';
import SignUp from '../signUp/signUp';
import music from '../../assets/img/music.jpg'
import profile from '../../assets/img/profile-icon.png'
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class NavBar extends Component {

  render() {

    const style1 = {
      border: 'solid grey 5px',
      margin: '50px',
      padding: '0'
    };

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/interface">
              <a href="#">
                <span className="navbar-left">Pitch Play</span>
              </a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/profile">
              <NavItem eventKey={1} href="#">
                Personal Profile</NavItem>
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
            <div className="headIcon">
              <div className="fa fa-user-circle "></div>
            </div>
            <NavItem href="#" data-toggle="modal" data-target="#myModal1">
              <div>Sign Up</div>
            </NavItem>
            <NavItem href="#" data-toggle="modal" data-target="#myModal2">Log In
            </NavItem>
            <div className="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <SignUp/>
                </div>
              </div>
            </div>
            <div className="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog " role="document">
                <div className="modal-content">
                  <LogIn/>
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
