import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPastExercisesData, loadSpecificExercisesIDwithAllScoresData,
loadSpecificExercisesIDwithAllScoresData_barGraph,
loadSpecificExercisesIDwithAllNotes,
sendArray
} from '../../actions';
import {bindActionCreators} from 'redux';
import getNoteAndOctave from '../../audio/getNoteAndOctave';

const mapStateToProps = (state, ownProps) => {
  return { list: state.dashboardReducer, user_info: state.loginReducer, getNoteAndOctave: getNoteAndOctave };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendArray,
    loadSpecificExercisesIDwithAllScoresData,
    loadSpecificExercisesIDwithAllScoresData_barGraph,
    loadSpecificExercisesIDwithAllNotes
  }, dispatch);
};

class Table extends Component {
  converter = (array) => {
    return JSON.parse(array).map((ele) => {
      return  this.props.getNoteAndOctave(ele)["note"] + ' ' + this.props.getNoteAndOctave(ele)["octave"] + '\xa0' + ' ➯ ' + '\xa0' ;
    }).toString().slice(0, -5).replace(/,/g , "")
  }
  convertTime = (timeStamp) => {
    let dateTime = timeStamp.split('T');
    let date = dateTime[0].split('-');//this is year
    let time = dateTime[1];//this is time
    let updatedTime = time.slice(0,5);
    let year = date.shift();
    date.push(year);
    let resultLeft = date.join('/');
    return resultLeft + '\xa0\xa0\xa0' + updatedTime + ' UTC';
  }

  renderList = (list) => (list.map((item, index) => (
    <tr className="tableRow" key={index} onClick={
      // this.props.loadSpecificExercisesIDwithAllScoresData(item.user_id, item.id);
      // this.props.loadSpecificExercisesIDwithAllScoresData_barGraph(item.user_id, item.id);
      () => {
        // let keyNumsArray = this.props.list[index].notes_array;
        //
        // let noteNameArray = JSON.parse(keyNumsArray).map((keyNum) => {
        //   let noteObj = getNoteAndOctave(keyNum);
        //   return noteObj.note + ' ' + noteObj.octave;
        // })
        // noteName = noteNameArray;
        // this.props.sendArray(noteNameArray);
        this.props.loadSpecificExercisesIDwithAllScoresData(item.user_id, item.id);
      }}>
      <td>
        <h4>{index + 1}</h4>
      </td>
      <td><h4>{this.converter(item.notes_array)}</h4></td>
      <td ><h5 id='timestampSize' >{` ${this.convertTime(item.created_at)} ` }</h5></td>
    </tr>
  )));

  render() {
      return (
        <div id="scroll-table" className="profileBackgroundDiv">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>
                  <h4>
                  <strong>
                  No. #
                </strong>
                </h4>
                </th>
                <th>
                  <h4>
                    <strong>
                      Exercises
                    </strong>
                </h4>
                </th>
                <th>
                  <h4>
                  <strong>
                  Creation Date
                </strong>
                </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.renderList(this.props.list)}
            </tbody>
          </table>
        </div>
      );
    // }
  }
}
// export noteNameArray;
export default connect(mapStateToProps, mapDispatchToProps)(Table);
