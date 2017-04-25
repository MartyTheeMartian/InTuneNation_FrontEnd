import React, { Component } from 'react';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';
import Interface from './components/interface/interface';
import Profile from './components/profile/profile';


import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/interface" component={Interface} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/" component={Footer} />

        </div>
      </Router>
    );
  }
}

export default App;
