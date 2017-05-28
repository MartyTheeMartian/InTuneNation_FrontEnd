import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPastExercisesData, loadSpecificExercisesIDwithAllScoresData} from '../../actions';
import {bindActionCreators} from 'redux';
import getNoteAndOctave from '../../audio/getNoteAndOctave';

const mapStateToProps = (state, ownProps) => {
  console.log('what is user dashboard',state.dashboard);
  return { list: state.dashboard, user_info: state.loginReducer, getNoteAndOctave: getNoteAndOctave };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadSpecificExercisesIDwithAllScoresData
  }, dispatch);
};

class Table extends Component {
  converter = (array) => {
    return JSON.parse(array).map((ele) => {
      return "Octave " + this.props.getNoteAndOctave(ele)["octave"] + "_" +this.props.getNoteAndOctave(ele)["note"] + ' | ' ;
    }).toString().slice(0, -2);
  }

  renderList = (list) => (list.map((item, index) => (
    <tr onClick={() => {
      this.props.loadSpecificExercisesIDwithAllScoresData(item.user_id, item.id);
    }}>
      <td>
        <h4>{index + 1}</h4>
      </td>
      <td><h4>{item.id}</h4></td>
      {/* <td><h4>{item.notes_array}</h4></td> */}
      <td><h4>{this.converter(item.notes_array)}</h4></td>
      <td><h4>{item.created_at}</h4></td>
    </tr>
  )));

  render() {
    if (this.props.list.length === 0) {
      return (
        <div className="alert alert-info">
          Table Will Show After You Click 'Check Past Exercises'</div>
      );
    } else {
      return (
        <table className="table table-bordered table-striped"
          style={{ "border": "4px solid #ffe6e6" }}>
          <thead>
            <tr>
              <th>
                <h4>
                ID
              </h4>
              </th>
              <th>
                <h4>
                Exercise ID
              </h4>
              </th>
              <th>
                <h4>
                Note Array
              </h4>
              </th>
              <th>
                <h4>
                Time Stamp
              </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.list)}
          </tbody>
        </table>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
