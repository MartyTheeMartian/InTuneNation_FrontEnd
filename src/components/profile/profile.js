import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import mathew from '../../assets/matthew.png'
import {Button, Thumbnail, Col, Row, Grid} from 'react-bootstrap';
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
              <h3>Thumbnail label</h3>
              <p>Kevin is born in pleasanton, he has always been passionate about helping people lives. He want to help people improve their singing skills</p>
              <div className="well" style={wellStyles}>
      <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
      <Button bsSize="large" block>Block level button</Button>
    </div>
            </Thumbnail>
          </Col>
          <Col xs={14} md={4}>

          </Col>

        </Row>
      </Grid>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
