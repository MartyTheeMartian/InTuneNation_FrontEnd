import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Thumbnail, Col, Row, Grid} from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

class Community extends Component {

  render() {
    return (
      <Grid>
        <Row>
          Hi
        </Row>
      </Grid>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Community);
