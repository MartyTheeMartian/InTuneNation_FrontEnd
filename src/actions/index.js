import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


export const pushNoteToArray = () => {
  return {
    type: 'NOTE_TO_ARRAY'
  };
};

export const toggleCapture = () => {
  console.log('Actions');
  return {
    type: 'TOGGLE_CAPTURE'
  };
};

// export const logUserIn = (email, password) => {
//   return {
//     type: 'LOG_USER_IN',
//     payload: {
//       email: email,
//       password: password
//     }
//   };
// };
