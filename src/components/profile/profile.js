import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mathew from '../../assets/img/matthew.png';
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
            </Thumbnail>

          </Col>


        </Row>
      </Grid>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
