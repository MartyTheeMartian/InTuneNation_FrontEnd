import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import mathew from '../../assets/matthew.png'
import {Button, Thumbnail, Col, Row, Grid, MenuItem, Clearfix, onSelectAlert, ButtonGroup, DropdownButton} from 'react-bootstrap';
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


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
        <Button>Button</Button>
        <Button>Button</Button>
        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
        <Button>Button</Button>
        <Button>Button</Button>
        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
      </ButtonGroup>
        </Col>

          <Col xs={14} md={4}>

          </Col>

        </Row>
      </Grid>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
