import React, {Component} from 'react';

import {Thumbnail, Col, Row, Grid} from 'react-bootstrap';
import C3Chart from 'react-c3js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ExerciseCardList from './exerciseCardList';
import 'c3/c3.css';
import mathew from '../../assets/img/matthew.png';
import {loadPastExercisesData} from '../../actions';
import Table from '../Table/Table.jsx';
import musicNoteMusic from '../../assets/img/music-note.jpg';

const mapStateToProps = (state, ownProps) => ({user: state.loginReducer, graphData: state.graphDataReducer});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPastExercisesData
}, dispatch);

class Profile extends Component {
  handleClick(e) {
    return () => this.props.loadPastExercisesData(this.props.user.id);
  }
  graph = () => {
    console.log('what is this.props.graphData.columns  ', this.props.graphData.columns);
    if (this.props.graphData !== "user hasn't sing yet") {
      return <C3Chart data={this.props.graphData}/>
    } else {
      return <div className="center-warning">
        <a href='#' className="thumbnail" style={{
          'text-decoration': 'none',
          'border-radius': '50px',
          'border-width': '3px'
        }}>
          <h4>user hasn't sign the related exercise yet, &nbsp; 😄 &nbsp; please go back to the interface page; Hit the piano and sign again !
          </h4>
        </a>
      </div>
    }
  }

  render() {
    if (this.props.user.id === undefined) {
      return (
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-2"/>
            <div className="col-md-8">
              <div className="alert alert alert-info" role="alert">Oh snap! Please Log Into Your Account
              </div>
              <div>
                <img src={musicNoteMusic} height={400} width={800} alt={''}/>
              </div>
            </div>

            <div className="col-md-2"/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="thumbnail">
                <img src={mathew} alt=".."/>
                <div className="caption">
                  <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <Table/>
              </div>

              <button onClick={this.handleClick()} className="btn btn-danger">
                Check Past Exercises
              </button>
              {/* <div/> */}
              {this.graph()}
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
