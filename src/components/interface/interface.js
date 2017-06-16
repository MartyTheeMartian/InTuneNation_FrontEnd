import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PianoButtons from './pianoButtons';
import Indicators from './indicators';
import Piano from './piano';
import SingButtons from './singButtons';
import TargetNoteScoreTable from './targetNoteScoreTable';
import { Col, Grid, Row } from 'react-bootstrap';


class Interface extends Component {
  render() {
    return (
      <div id="keyboardBackground">
        <Grid>
          <Row className="show-grid">
            <Col md={9}>
              <PianoButtons />
              <Piano />
            </Col>
            <Col  md={3}>
              <SingButtons />
            </Col>

          </Row>

          <Row>
            <Col xs={12} md={5}><Indicators /></Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} lg={0}></Col>
            <Col xs={12} md={6}><TargetNoteScoreTable /></Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Interface;
