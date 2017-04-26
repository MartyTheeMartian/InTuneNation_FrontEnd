import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {Card, Icon, Image, Grid, Button, Segment} from 'semantic-ui-react';
import dog from './dog.jpg'
import {Button, Thumbnail, Col, Row, Grid} from 'react-bootstrap';
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
          <Col xs={6} md={4}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
