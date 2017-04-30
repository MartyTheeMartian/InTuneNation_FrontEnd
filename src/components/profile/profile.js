import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import mathew from '../../assets/img/matthew.png'
import {
  Button,
  Thumbnail,
  Col,
  Row,
  Grid,
  MenuItem,
  Clearfix,
  onSelectAlert,
  ButtonGroup,
  DropdownButton,
  Table
} from 'react-bootstrap';
const wellStyles = {
  maxWidth: 400,
  margin: '0 auto 10px'
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class Profile extends Component {

  render() {
    return (
      <Grid>
        <Row>

          <Col xs={4} md={3}>
            <Thumbnail src={mathew} alt="242x200">
              <h3>Kevin Zheng</h3>
              <p>Kevin is born in pleasanton, he has always been passionate about helping people lives. He want to help people improve their singing skills</p>
            </Thumbnail>

            <ButtonGroup vertical>
              <Button>Dashboard</Button>
              <Button>Status</Button>
              <Button>Ranking</Button>

              {/* <DropdownButton title="Ranking" id="bg-vertical-dropdown-1">
                <MenuItem eventKey="1">Ranking</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton> */}
              <Button>Inbox</Button>
              <Button>Profile</Button>

              {/* <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton> */}
              {/* <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton> */}
            </ButtonGroup>
          </Col>

          <Col xs={14} md={4}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>

        </Row>
      </Grid>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
