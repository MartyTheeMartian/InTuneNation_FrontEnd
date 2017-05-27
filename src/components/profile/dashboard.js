import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class Dashboard extends Component {
  render(){
    const line1 = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    };
    <C3Chart data={line1} />
    }
  };

export default connect()(Dashboard);
