
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


export const pushNoteToArray = (noteObj) => {
  return {
    type: 'NOTE_TO_ARRAY',
    payload: noteObj
  };
};

export const toggleCapture = () => {
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

export const shiftOctaves = (direction) => {
  return {
    type: 'SHIFT_OCTAVES',
    payload: direction
  };
};
