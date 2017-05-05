import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dashboardRun } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  console.log('what is state.dashboard', state.dashboard);
  // let filteredExercises = state.dashboard.map((exercise) => {
  //   return ((exercise["created_at"] in exercise) && (exercise["notes_array"] in exercise) && (exercise["id"] in exercise));
  // });
  //
  return { list: state.dashboard };
};

const _renderList = list => (
    list.map(item => (
      <tr>
        <td>{item.id}</td>
        <td>{item.notes_array}</td>
        <td>{item.created_at}</td>
      </tr>
    ))
  );

class Table extends Component {

  render() {
    console.log('Profile props', this.props);

    if (this.props.list.length === 0) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {/* <th>
            ID
          </th> */}
            <th>
            Score ID
          </th>
            <th>
            Note Array
          </th>
            <th>
            Time Stamp
            </th>
          </tr>
        </thead>
        <tbody>
          {_renderList(this.props.list)}
        </tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps)(Table);
