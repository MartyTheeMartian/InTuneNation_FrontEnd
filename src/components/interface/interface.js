import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import PianoButtons from './pianoButtons';
import Indicators from './indicators';
import Piano from './piano';
import { loadPastExercisesData, postSignUp, postLogIn, googleOauth, startload, renderNavBar } from '../../actions';

import SingButtons from './singButtons';
import TargetNoteScoreTable from './targetNoteScoreTable';
import TuningSpecButtons from './tuningSpecButtons';


const mapStateToProps = (state, ownProps) => ({ googleOauthState: state.googleOauthReducer });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPastExercisesData,
    startload,
    postSignUp,
    postLogIn,
    googleOauth,
    renderNavBar,
  }, dispatch);
};

class Interface extends Component {

  componentDidMount = () => {
    let returnObj;
    this.props.renderNavBar();
    if (window.location.href.indexOf('?') !== -1) {
      const temp = decodeURIComponent(window.location.href.substring(window.location.href.indexOf('?') + 1));
      const cutTemp = temp.substring(0, temp.length - 1);
      returnObj = JSON.parse(cutTemp);

      localStorage.setItem('token', returnObj.token);
      localStorage.setItem('userId', returnObj.id);
      localStorage.setItem('firstName', returnObj.first_name);
      localStorage.setItem('lastName', returnObj.last_name);
      localStorage.setItem('email', returnObj.email);
      localStorage.setItem('profile_picture', returnObj.profile_picture);
    }
  }


  render() {
    return (
      <div id="keyboardBackground">
        <Grid>
          <Row id="interface-top-row" className="show-grid">
            <Col md={12} lg={12}>
              <Row className="show-grid">
                <Col lg={9} md={9}>
                  <PianoButtons />
                  <Piano />
                </Col>
                <Col lg={3} md={9}>
                  <SingButtons />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="interface-bottom-row" className="show-grid">
            <Col lg={4} md={5} sm={6}><Indicators /></Col>
            <Col lg={8} md={7} sm={6}>
              <Row className="show-grid">
                <Col lg={12} md={8} className="tableAndSliders">
                  <TargetNoteScoreTable />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col lg={12} md={8} id="sliders" className="tableAndSliders">
                  <TuningSpecButtons />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
