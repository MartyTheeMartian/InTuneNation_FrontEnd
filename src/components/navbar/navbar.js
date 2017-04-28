import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import LogIn from '../logIn/logIn.js'
import SignUp from '../signUp/signUp.js'
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class NavBar extends Component {

  render() {

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/interface">
              <a href="#">Intervalicity</a>
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

            {/* <NavItem> Intervalicity</NavItem> */}

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Sign up</MenuItem>
              <MenuItem eventKey={3.2}>Log in</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            {/* <LinkContainer to="/signup"> */}

            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal1">
              Sign up
            </button>

            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal2">
              Log in
            </button>

            <div className="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">

                  <div class="modal-header">
                    {/* <button type="button" class="close " data-dismiss="modal" aria-label="Close" > */}
                      {/* <span aria-hidden="true">&times;</span>
                    </button> */}

                  </div>


                    <SignUp/>

                </div>
              </div>
            </div>

            <div className="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">

                  {/* <div class="modal-header"> */}
                    {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button> */}

                  {/* </div> */}


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
