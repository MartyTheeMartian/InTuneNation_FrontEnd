import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PianoButtons from './pianoButtons';
import Indicators from './indicators';
import Piano from './piano';
import SingButtons from './singButtons';
import TargetNoteScoreTable from './targetNoteScoreTable';
import { Col, Grid, Row } from 'react-bootstrap';
// import keyboardBackground from '../../../public/assets/Links/AdobeStock_26077538.png';


class Interface extends Component {
  render() {
    return (
      <Grid id="keyboardBackground">
        <Row className="show-grid">
          <Col xs={0} md={3}></Col>
          <Col xs={6} md={4}><PianoButtons /></Col>
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={4}><SingButtons /></Col>
        </Row>

        <Row className="show-grid">
          <Col xs={0} md={0} lg={2}></Col>
          <Col xs={12} md={12} lg={8}><Piano /></Col>
          <Col xs={0} md={0} lg={2}></Col>
        </Row>

        <Row>
          <Col xs={12} md={5}><Indicators /></Col>
        </Row>

        <Row className="show-grid">
          <Col md={6} lg={0}></Col>
          <Col xs={12} md={6}><TargetNoteScoreTable /></Col>
        </Row>

      </Grid>
    );
  }
}

export default Interface;
