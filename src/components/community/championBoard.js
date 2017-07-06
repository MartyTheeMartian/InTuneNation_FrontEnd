import React, {Component} from 'react';
import {connect} from 'react-redux';

const Board = (props) => {
  console.log('props now is,', props.data)
  const renderList = (list) => { return list.map((item, index) => {
    return (
    <tr key={index} >
      <td># 1</td>
      <td><img className="profilePicture" src={item.profile_picture} alt=".."/></td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>90</td>
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
              <th>Last Name</th>
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
