import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OctaveButtons from './octaveButtons';
import NoteIndicator from './noteIndicator';
import TargetNoteIndicator from './targetNoteIndicator';
import TuningIndicator from './tuningIndicator';
import Piano from './piano';
import CaptureButtons from './captureButtons';
import ScoreBox from './scoreBox';
import TargetNoteScoreTable from './targetNoteScoreTable';
import { Col, Grid, Row } from 'react-bootstrap';
// import keyboardBackground from '../../../public/assets/Links/AdobeStock_26077538.png';


class Interface extends Component {
  render() {
    return (
      <Grid id="keyboardBackground">
        <Row className="show-grid">
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={4}><OctaveButtons /></Col>
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={4}><CaptureButtons /></Col>
        </Row>

        <Row className="show-grid">
          <Col xs={0} md={0} lg={2}></Col>
          <Col xs={12} md={12} lg={8}><Piano /></Col>
          <Col xs={0} md={0} lg={2}></Col>
        </Row>

        <Row>
          <Col xs={12} md={6} lg={0}><TuningIndicator /></Col>
          {/* <Col xs={0} md={8}><TargetNoteScoreTable /></Col> */}
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
