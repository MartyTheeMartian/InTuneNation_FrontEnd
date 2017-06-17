import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PianoButtons from './pianoButtons';
import Indicators from './indicators';
import Piano from './piano';
import ScoreBox from './scoreBox';
import { loadPastExercisesData, postSignUp, postLogIn,googleOauth, startload,  renderNavBar } from '../../actions';

import SingButtons from './singButtons';
import TargetNoteScoreTable from './targetNoteScoreTable';
import TuningSpecButtons from './tuningSpecButtons';

import { Col, Grid, Row } from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => ({googleOauthState: state.googleOauthReducer});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPastExercisesData,
    startload,
    postSignUp,
    postLogIn,
    googleOauth,
    startload,
    renderNavBar,
  }, dispatch);
};

let profilePicture;
class Interface extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    let returnObj ;
    this.props.renderNavBar();
    if(window.location.href.indexOf('?') !== -1) {
      let temp = decodeURIComponent(window.location.href.substring(window.location.href.indexOf('?') + 1));
      let cutTemp = temp.substring(0, temp.length - 1);
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
            <Col smHidden xsHidden md={12} lg={12}>
              <Row className="show-grid">
                <Col md={9}>
                  <PianoButtons />
                  <Piano />
                </Col>
                <Col md={3}>
                  <SingButtons />
                </Col>
              </Row>
            </Col>
            {/* <Col mdHidden smHidden xsHidden lg={2}></Col> */}
            {/* <Col lgHidden mdHidden sm={12}>
              <Row className="show-grid">
                <Col sm={8}><PianoButtons /></Col>
                <Col sm={4}><SingButtons /></Col>
              </Row>
              <Row>
                <Col sm={7}><Piano /></Col>
              </Row>
            </Col> */}
          </Row>
          <Row className="show-grid">
            <Col xsHidden smHidden md={4} lg={4}><Indicators /></Col>
            <Col lg={7}>
              <Row className="show-grid">
                <Col className="tableAndSliders">
                  <TargetNoteScoreTable />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col lg={12} id="sliders" className="tableAndSliders"><TuningSpecButtons/></Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Interface);
