import React from 'react';
import ReactDOM from 'react-dom';
import Router from './app';

// describe('App rendering', () => {
//   it('renders without crashing', () => {
//     shallow(
//       <Router>
//         <div className="App">
//           <Route path="/" component={NavBar} />
//           <Route exact path="/" component={Home} />
//           <Route exact path="/interface" component={Interface} id="keyboardBackground"/>
//           <Route exact path="/profile" component={Profile} />
//         </div>
//       </Router>
//     );
//   })
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Router, div);
});
