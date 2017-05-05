import React, {Component} from 'react';

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
import Table from '../profile/profile';
// const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const mapStateToProps = ({ dashboard }) => {
  return {
    dashboard,
  }
};
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({dashboardRun}, dispatch);
// };

class Profile extends Component {
  render() {
    console.log(`Profile props`, this.props.dashboard);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            left
            <div className="thumbnail">
              <img src={mathew} alt=".." />
              <div class="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div>

            </div>


            <button onClick={this.props.dashboardRun}> Click me to get all the dashboards !!! </button>
            <div>
              {/* <Table></Table> */}
            </div>

            <C3Chart data={averageScore} />

            middle
          </div>
          <div className="col-md-2">
            right
          </div>
        </div>
      </div>

    );
  }

}

export default connect(mapStateToProps, { dashboardRun })(Profile);
