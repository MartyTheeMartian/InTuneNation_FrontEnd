import React, { Component } from 'react';
import { Thumbnail, Col, Row, Grid } from 'react-bootstrap';
import C3Chart from 'react-c3js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'c3/c3.css';
import mathew from '../../assets/img/matthew.png';
import { loadPastExercisesData, postSignUp, postLogIn, renderNavBar } from '../../actions';
import Table from '../table/table';
import musicNoteMusic from '../../assets/img/music-note.jpg';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link } from 'react-router-dom';
import rd3 from 'react-d3';
import { BarChart } from 'react-d3/barchart';

const barData = [
  {label: 'A', value: 5},
  {label: 'B', value: 6},
  {label: 'F', value: 7}
];

let profilePicture;

const mapStateToProps = (state, ownProps) => ({user: state.loginReducer, graphData: state.graphDataReducer});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPastExercisesData,
    startload,
    postSignUp,
    postLogIn,
    renderNavBar,
  }, dispatch);
};

function startload(props, userID) {
  return (dispatch, getState) => {
    dispatch(props.loadPastExercisesData(userID));
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: ''
    };
  }

  // refresh = () => {
  //   this.forceUpdate();
  // }

componentDidMount = () => {
  this.props.renderNavBar();
  if(window.location.href.indexOf('?') !== -1) {
    let temp = decodeURIComponent(window.location.href.substring(window.location.href.indexOf('?') + 1));
    let cutTemp = temp.substring(0, temp.length - 1);
    let returnObj = JSON.parse(cutTemp);
    console.log('returnObj', returnObj)

    localStorage.setItem('token', returnObj.token);
    localStorage.setItem('userId', returnObj.id);
    localStorage.setItem('firstName', returnObj.first_name);
    localStorage.setItem('lastName', returnObj.last_name);
    localStorage.setItem('email', returnObj.email);
    localStorage.setItem('password', returnObj.hashed_password);
    localStorage.setItem('profile_picture', returnObj.profile_picture);
    profilePicture = returnObj.profile_picture.substring(0, returnObj.profile_picture.length-2)+'200';

    // console.log('profilePicture====type', typeof profilePicture);
    this.props.postLogIn(
      { email: returnObj.email, password: returnObj.hashed_password }
    );
  }
  let userID = localStorage.getItem('userId');
  this.props.startload(this.props, userID);

}


  graph = () => {
    if (this.props.graphData === null){
      return <div></div>;
    }
    else if (this.props.graphData.length !== 0) {
      return <div className="center-warning">
        <C3Chart data={{
          unload: true,
          columns: this.props.graphData.columns
        }} axis={this.props.graphData.axis} />
      </div>
    }
    else  {
      return <div className="center-warning">
        <Link to="/interface">
          <a className="thumbnail" style={{
            'background': '#e6ecff'
          }}>
            <h3>No scores logged. Please go back to the interface page and Sing! 😉
            </h3>
          </a>
        </Link>
      </div>
    }
  }

  uploadFile(e) {
    // e.preventDefault();
    // cloudinary.openUploadWidget(
    //   { cloud_name: 'kevinawesome',
    //     upload_preset: 'musicapp',
    //     theme: 'minimal' },
    //   (error, imageInfo) => {
    //     console.log(error);
    //     if(error === null){
    //       let cloud_url=imageInfo[0].url;
    //       this.setState({image:cloud_url});
    //     }
    //   });
  }

  render() {
      return (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 col-xs-6">
                <div className="thumbnailSection">
                  <div className="thumbnail">
                    <img src={profilePicture || mathew} alt=".."/>
                    <div className="caption">
                      <h3>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h3>
                    </div>
                  </div>
                  <div>
                    {/* <BarChart
                      data={barData}
                      width={500}
                      height={200}
                      fill={'#3182bd'}
                      title='Bar Chart'
                    /> */}
                  </div>
                  {/* <input type="file" onClick={this.uploadFile}>
                  <img src={this.state.image}></img>
                </input> */}
                  {/* <div>
                  ImageDropping Area
                <Dropzone onDrop={ this.uploadFile.bind(this) }/>
                </div> */}
                </div>
              </div>
              <div className="col-md-8 col-xs-12">
                <div className="pastExercise"></div>
                <div>
                  <Table/>
                </div>
                <br/>
              </div>
              <div className="col-md-2 col-xs-6"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-xs-3"></div>
            <div className="col-md-8 col-xs-12">
              {this.graph()}
            </div>
            <div className="col-md-2 col-xs-3"></div>
          </div>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Profile);
