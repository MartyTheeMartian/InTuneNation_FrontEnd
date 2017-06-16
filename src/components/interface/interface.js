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
      localStorage.setItem('password', returnObj.hashed_password);
      localStorage.setItem('profile_picture', returnObj.profile_picture);
    }
  }


  render() {
    return (

      // <div id="keyboardBackground">
      //   <Grid>
      //     <Row className="show-grid">
      //       <Col md={9}>
      //         <PianoButtons />
      //         <Piano />
      //       </Col>
      //       <Col  md={3}>
      //         <SingButtons />
      //       </Col>
      //
      //     </Row>
      //
      //     <Row>
      //       <Col xs={12} md={5}><Indicators /></Col>
      //     </Row>
      //
      //     <Row className="show-grid">
      //       <Col md={6} lg={0}></Col>
      //       <Col xs={12} md={6}><TargetNoteScoreTable /></Col>
      //     </Row>
      //
      //   </Grid>
      // </div>
      <div id="keyboardBackground">
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Interface);
