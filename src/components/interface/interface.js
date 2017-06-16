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
import { loadPastExercisesData, postSignUp, postLogIn,googleOauth, startload,  renderNavBar } from '../../actions';
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
      <Grid id="keyboardBackground">
        <Row className="show-grid">
          <Col xs={0} md={3}></Col>
          <Col xs={6} md={4}><OctaveButtons /></Col>
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={4}><CaptureButtons /></Col>
        </Row>

        <Row className="show-grid">
          <Col xx={0} md={3}></Col>
          <Col xs={12} md={12}><Piano /></Col>
          <Col xs={12} md={4}><TuningIndicator /></Col>
        </Row>

        <Row className="show-grid">
          <Col md={3}></Col>
          <Col xs={4} md={3}><NoteIndicator /></Col>
          <Col xs={4} md={3}><TargetNoteIndicator /></Col>
          <Col xs={4} md={3}><ScoreBox /></Col>
        </Row>

        {/* <Row className="show-grid">
          <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
          <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        </Row> */}
      </Grid>
      // {/* <div id="keyboardBackground" className="container">
        // <div id="keyboardBackground" className="container"></div>
        // <div className="row">
        //   <Col xs={4}></Col>
        //   <Col xs={4}><OctaveButtons /></Col>
        //   <Col xs={4}><CaptureButtons className="captureButtons"/></Col>
          // {/* <OctaveButtons /> */}
          // {/* <CaptureButtons className="captureButtons"/> */}
        // </div>
        // <div className="row">
        //   <Piano />
        //   <TuningIndicator />
        // </div>
        // <div id="indicatorRow" className="row">
        //   <NoteIndicator />
        //   <TargetNoteIndicator />
        //   <ScoreBox />
      //   </div>
      // </div> */}
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Interface);
