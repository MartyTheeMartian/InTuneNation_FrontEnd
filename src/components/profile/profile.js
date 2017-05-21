import React, { Component } from 'react';

import { Thumbnail, Col, Row, Grid } from 'react-bootstrap';
import C3Chart from 'react-c3js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExerciseCardList from './exerciseCardList';
import 'c3/c3.css';
import mathew from '../../assets/img/matthew.png';
import { loadPastExercisesData } from '../../actions';
import Table from '../Table/Table.jsx';
import musicNoteMusic from '../../assets/img/music-note.jpg';

const mapStateToProps = (state, ownProps) => ({
  user: state.loginReducer,
  graphData: state.graphDataReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadPastExercisesData,
}, dispatch);


class Profile extends Component {
  handleClick(e) {
    return () => this.props.loadPastExercisesData(this.props.user.id);
  }

  render() {
    if (this.props.user.id === undefined) {
      return (
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="alert alert alert-info" role="alert">Please Log Into Your Account</div>
              <div>
                <img src={musicNoteMusic} height={400} width={800} alt={''} />
              </div>
            </div>


            <div className="col-md-2" />
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="thumbnail">
              <img src={mathew} alt=".." />
              <div className="caption">

                <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>

              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div>
              <Table />
            </div>

            <button onClick={this.handleClick()} className="btn btn-danger">
                Check Past Exercises
              </button>
            <div />

            <C3Chart data={this.props.graphData} />

          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
