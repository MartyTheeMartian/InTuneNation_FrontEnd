import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = { state, ownProps } => {
  return {

  }
}

cpmst _renderList = (list) => {
  return (
    list.map(item => (
      <tr>
        <td>

        </td>
        <td>

        </td>
        <td>

        </td>
      </tr>
    ))
  )
}

class Table extends Component {

  render(){

    return (
      <table className="table">
        <thead>
          <tr>
            <th>
              Score ID
            </th>
            <th>
              Score Array
            </th>
            <th>
              AverageScore
            </th>
            <th>
              Time Stamp
            </th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    )
  }
}

export default connect(mapStateToProps)(Table);
