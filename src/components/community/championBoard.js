import React, { Component } from 'react';
import {connect} from 'react-redux';
import { averageScore } from '../../actions';

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadUserData: () => { dispatch(loadUserData()) },
//   // return bindActionCreators({loadUserData}, dispatch)
// };

const Board = (props) => {
  console.log('props now is,', props.data)
  const renderList = (list) => {
    // console.log('what is list', list);
      return list.map((user, index) => {

    // insert API call here to get user avg
    return (
    <tr key={index} >
      <td>{index + 1}</td>
      <td><img className="profilePicture" src={user.profile_picture} alt=".."/></td>
      <td>{user.first_name}</td>
      <td>{user.avg_score}</td>
    </tr>
    );
  }) };
  return (
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="warning">
              <th>Ranking</th>
              <th>Profile Picture</th>
              <th>First Name</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {renderList(props.data)}
          </tbody>
        </table>
  )
}

export default Board;
