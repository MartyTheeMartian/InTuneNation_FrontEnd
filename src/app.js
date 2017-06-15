import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Interface from './components/interface/interface';
import Profile from './components/profile/profile';
import './app.css';


class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/interface" component={Interface} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
