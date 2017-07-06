import React, {Component} from 'react';
import {connect} from 'react-redux';

const Board = (props) => {

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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
  )
}

export default Board;
