import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PianoButtons from './pianoButtons';
import Indicators from './indicators';
import Piano from './piano';
import SingButtons from './singButtons';
import TargetNoteScoreTable from './targetNoteScoreTable';
import TuningSpecButtons from './tuningSpecButtons';
import { Col, Grid, Row } from 'react-bootstrap';
// import keyboardBackground from '../../../public/assets/Links/AdobeStock_26077538.png';


class Interface extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col smHidden xsHidden md={12} lg={10}>
            <Row className="show-grid">
              <Col lg={6}><PianoButtons /></Col>
              <Col lg={5}><SingButtons /></Col>
            </Row>
            <Row className="show-grid">
              <Col lg={12}><Piano /></Col>
            </Row>
          </Col>
          <Col mdHidden smHidden xsHidden lg={2}></Col>
          <Col lgHidden mdHidden sm={12}>
            <Row className="show-grid">
              <Col sm={8}><PianoButtons /></Col>
              <Col sm={4}><SingButtons /></Col>
            </Row>
            <Row>
              <Col sm={7}><Piano /></Col>
              <Col sm={5}><Indicators /></Col>
            </Row>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col lg={4}><Indicators /></Col>
          <Col lg={8}>
            <Row className="show-grid">
              <br />
              <Col lg={10}><TargetNoteScoreTable /></Col>
            </Row>
            {/* <br /><br /> */}
            <Row className="show-grid">
              <Col lg={8}><TuningSpecButtons /></Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Interface;
