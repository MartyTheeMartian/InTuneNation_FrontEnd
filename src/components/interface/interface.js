import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import { Steps } from 'intro.js-react';
import PianoButtons from './pianoButtons';
import Indicators from './indicators';
import Piano from './piano';
import { introOptions } from '../../utils/intro_js_steps';
import { loadPastExercisesData, postSignUp, postLogIn, googleOauth, startload, renderNavBar, toggleSteps, introTriggeredAction } from '../../actions';

import SingButtons from './singButtons';
import TargetNoteScoreTable from './targetNoteScoreTable';
import TuningSpecButtons from './tuningSpecButtons';

const mapStateToProps = (state) => {
  return {
    googleOauthState: state.googleOauthReducer,
    stepsEnabled: state.stepsEnabledReducer,
    initialStep: state.initialStepReducer,
    steps: state.stepsReducer,
    introTriggered: state.introTriggeredReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPastExercisesData,
    startload,
    postSignUp,
    postLogIn,
    googleOauth,
    renderNavBar, // this currently does NOTHING
    toggleSteps,
    introTriggeredAction,
  }, dispatch);
};

class Interface extends Component {

  componentDidMount = () => {
    let returnObj;
    this.props.renderNavBar(); // this currently does NOTHING
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

  onExit = () => {
    if (!this.props.introTriggered) {
      this.props.introTriggeredAction();
      this.props.toggleSteps();
    }
  }


  render() {
    return (
      <div id="keyboardBackground">
        <Grid>
          <Steps
            enabled={this.props.stepsEnabled}
            steps={this.props.steps}
            initialStep={this.props.initialStep}
            onExit={this.onExit}
            options={introOptions}
          />
          <Row id="interface-top-row" className="show-grid">
            <Col md={12} lg={12}>
              <Row className="show-grid">
                <Col lg={9} md={9}>
                  <PianoButtons />
                  <Piano />
                </Col>
                <Col lg={3} md={9}>
                  <SingButtons className="intro-interface-singButtons"/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="interface-bottom-row" className="show-grid">
            <Col lg={4} md={5} sm={6}><Indicators/></Col>
            <Col lg={8} md={7} sm={6}>
              <Row className="show-grid">
                <Col lg={12} md={8} className="tableAndSliders">
                  <TargetNoteScoreTable className="intro-interface-targetTable"/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col lg={12} md={8} id="sliders" className="tableAndSliders intro-interface-sliders">
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
