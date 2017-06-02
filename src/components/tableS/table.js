import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPastExercisesData, loadSpecificExercisesIDwithAllScoresData} from '../../actions';
import {bindActionCreators} from 'redux';
import getNoteAndOctave from '../../audio/getNoteAndOctave';

const mapStateToProps = (state, ownProps) => {
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
    }).toString().slice(0, -2).replace(/,/g , "")
  }

  renderList = (list) => (list.map((item, index) => (
    <tr onClick={() => {
      this.props.loadSpecificExercisesIDwithAllScoresData(item.user_id, item.id);
    }}>
      <td>
        <h5>{index + 1}</h5>
      </td>
      <td><h5>{item.id}</h5></td>
      <td><h5>{this.converter(item.notes_array)}</h5></td>
      <td><h5>{item.created_at}</h5></td>
    </tr>
  )));

  render() {
    // if (this.props.list.length === 0) {
    //   return (
    //     <div className="alert alert-info">
    //       Table Will Show After You Click 'Check Past Exercises'</div>
    //   );
    // } else {
      return (
        <table className="table table-bordered table-striped"
          style={{ "border": "4px solid #ffe6e6" }}>
          <thead>
            <tr>
              <th>
                <h5>
                ID
              </h5>
              </th>
              <th>
                <h5>
                Exercise ID
              </h5>
              </th>
              <th>
                <h5>
                Note Array
              </h5>
              </th>
              <th>
                <h5>
                Time Stamp
              </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.list)}
          </tbody>
        </table>
      );
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
