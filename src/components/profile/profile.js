import React, { Component } from 'react';

import {
  // Button,
  Thumbnail,
  Col,
  Row,
  Grid,
  // MenuItem,
  // Clearfix,
  // onSelectAlert,
  // ButtonGroup,
  // DropdownButton,
  // Table
} from 'react-bootstrap';
import C3Chart from 'react-c3js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { averageScore } from '../../charts/linegraph';
import ExerciseCardList from './exerciseCardList';
import 'c3/c3.css';
import mathew from '../../assets/img/matthew.png';
import { dashboardRun } from '../../actions';
import Table from '../Table/Table.jsx';
// const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const mapStateToProps = (state, ownProps) => ({
  user: state.loginReducer,
});
//
const mapDispatchToProps = dispatch => bindActionCreators({
  dashboardRun,
}, dispatch);


class Profile extends Component {
  handleClick(e) {
    return () => this.props.dashboardRun(this.props.user.id);
  }


  foo() {

  }

  foo: () => {

  }

  render() {
    if (this.props.user.id === undefined) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            {/* left */}
            <div className="thumbnail">
              <img src={mathew} alt=".." />
              <div className="caption">

                <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                <p>
                  {/* <a href="#" className="btn btn-primary" role="button">Button</a>
                    <a href="#" className="btn btn-default" role="button">Button</a> */}
                </p>
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

            <C3Chart data={averageScore} />

            {/* middle */}
          </div>
          <div className="col-md-2">
            {/* right */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
