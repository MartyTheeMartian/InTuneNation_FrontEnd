import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({}, dispatch);
};


class NavBar extends Component {

  render() {
    return (

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/interface">
              <a href="#">Picth Play Percision</a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
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

            {/* <NavItem> Intervalicity</NavItem> */}

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Sign up</MenuItem>
              <MenuItem eventKey={3.2}>Log in</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/signup">
              <NavItem eventKey={1} href="#">Sign up</NavItem>
            </LinkContainer>
            <LinkContainer to='/login'>
              <NavItem eventKey={2} href="#">Sign in</NavItem>
            </LinkContainer>
          </Nav>

        </Navbar.Collapse>

      </Navbar>


    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(NavBar);
