import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Col,
  Row,
  Grid,
  Navbar,
  Table,
} from 'react-bootstrap';

const mapStateToProps = (state) => { return state; };

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };

class Community extends Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={18} md={3}>
            <Navbar.Text pullLeft className>
              Monster Dashboard
            </Navbar.Text>
          </Col>
          <Col xs={5} md={4}>
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
          <Col xs={13} md={4}>
            Whatever
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Community);
