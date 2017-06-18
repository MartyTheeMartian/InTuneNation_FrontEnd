import React, {Component} from 'react';
import {Thumbnail, Col, Row, Grid} from 'react-bootstrap';
import C3Chart from 'react-c3js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import 'c3/c3.css';
import mathew from '../../assets/img/matthew.png';
import {
  loadPastExercisesData,
  postSignUp,
  postLogIn,
  renderNavBar,
  googleOauth,
  startload,
  averageArr
} from '../../actions';
import Table from '../table/table';
import musicNoteMusic from '../../assets/img/music-note.jpg';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Link} from 'react-router-dom';
import rd3 from 'react-d3';
import {BarChart} from 'react-d3/barchart';
import  { noteNameArray } from '../table/table.js'
const mapStateToProps = (state, ownProps) => ({user: state.loginReducer, graphData: state.graphDataReducer,
  graphDataBarGraph: state.barGraphgraphDataReducer,
    googleOauthState: state.googleOauthReducer, list: state.dashboardReducer});


// graphDataBarGraph: state.barGraphgraphDataReducer,

let profile_picture;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPastExercisesData,
    startload,
    postSignUp,
    postLogIn,
    renderNavBar,
    googleOauth,
    startload,
    averageArr
  }, dispatch);
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: ''
    };
  }
  //
  // converter = (array) => {
  //   console.log('arrrrrray here!', array)
  //   return JSON.parse(array).map((ele) => {
  //     return  this.props.getNoteAndOctave(ele)["note"] + ' ' + this.props.getNoteAndOctave(ele)["octave"] + '\xa0' + ' ➯ ' + '\xa0' ;
  //   }).toString().slice(0, -5).replace(/,/g , "")
  // }

  componentDidMount = () => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('userId');
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let email = localStorage.getItem('email');

    if (localStorage.getItem('profile_picture') !== "undefined") {
      profile_picture = localStorage.getItem('profile_picture').substring(0, localStorage.getItem('profile_picture').length - 2) + '200';
    } else {
      profile_picture = mathew;
    }

    let Obj = {
      token: token,
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      profile_picture: profile_picture.substring(0, profile_picture.length - 2) + '200',
    }
    //sending the object to the state so i can rerender the page
    this.props.googleOauth(Obj);
    //loading the music table
    this.props.loadPastExercisesData(Obj.id);

  }

  convertArr = ( arr ) => {
        // console.log('what is notes', this.props.notes);
    this.props.averageArr(arr);
  }

  graph = () => {
        console.log('what is notes', this.props.notes);
    if (this.props.graphData === null) {
      return <div></div>;
    } else if (this.props.graphData.length !== 0) {
      return <div><div className="center-warning">
          <C3Chart data={{
            // x:'x1',
            unload: true,
            columns:  this.props.graphData.columns
          ,
          }} axis={this.props.graphData.axis}/>
        </div>
        <div className="center-warning">
          <C3Chart
             data={{
            // x: 'x1',
            unload: true,
            columns:[
              // ['x1',...noteNameArray],
              ['note',...this.props.graphDataBarGraph.columns]
            ],
             type: 'bar'}}
        bar={ {width: {
            ratio: 0.5,
        }}}
           axis={this.props.graphDataBarGraph.axis} />
        </div>
       </div>
    } else {
      return <div className="center-warning">
        <Link to="/interface" onClick={this.insertExToRedux}>
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

  render() {
        // console.log('what is notes', this.props.notes);
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-6">
              <div className="thumbnailSection">
                <div className="thumbnail">
                  <img src={profile_picture} alt=".."/>
                  <div className="caption">
                    <h3>{this.props.googleOauthState.firstName} {this.props.googleOauthState.lastName}</h3>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-md-10 col-xs-12">
              <div className="pastExercise"></div>
              <div>
                <Table/>
              </div>
              <br/>
            </div>
            <div className="col-md-2 col-xs-6"></div>
          </div>
          <div className="row" >
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
