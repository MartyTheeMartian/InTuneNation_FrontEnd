import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="page">

      {/* <NavbarClass>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secondPage">Search people</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </NavbarClass> */}



          <Route exact path='/' />
          <Route path='/secondPage' />
        </div>
      </Router>
    );
  }
}

export default App;
