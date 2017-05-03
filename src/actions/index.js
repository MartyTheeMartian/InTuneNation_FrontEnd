/*eslint-disable*/
import axios from 'axios';

export const currentNote = (note) => {
  return {
    type: 'CURRENT_NOTE',
    payload: note,
  };
};

export const pushKeyEventToArray = (noteObj) => {

  return {
    type: 'ADD_KEY_EVENT',
    payload: noteObj,
  };
};

export const toggleCapture = () => {
  return {
    type: 'TOGGLE_CAPTURE',
  };
};

export const signUserUp = (user) => {
  console.log('actions/signUserUp');
  const API_URL = `https://ppp-capstone-music.herokuapp.com/user/signup`;
  return axios
   .post(API_URL, user)
   .then(response => {
     console.log('response === ', response);
     return response;
   }).catch((err) => {
     console.error(err);
   })
  //  return fetch(API_URL, {
  //    mode: 'no-cors',
  //    method: 'POST',
  //    headers: {
  //      'Accept': 'application/json',
  //      'Content-Type': 'application/json',
  //       body: JSON.stringify(user)
  //    }
  //  })
  //  .then((res) => {
  //    console.log('res === ',res);
  //    console.log('res.body === ', res.body);
  //    console.log('res.json === ', res.json);
  //    return res.json();
  //  })
  //  .catch((err) => {
  //    console.log(err);
  //  });
};

export const postSignUp = (user) => {
  console.log('postSignUp');
  return {
    type: 'SIGN_UP',
    payload: signUserUp(user),
  }
}

export const logUserIn = (email, password) => {
  return {
    type: 'USER_LOG_IN',
    payload: {
      email,
      password,
    }
  };
};

export const shiftOctaves = (direction) => {
  return {
    type: 'SHIFT_OCTAVES',
    payload: direction,
  };
};

export const toggleAudioCapture = () => {
  return {
    type: 'TOGGLE_AUDIO_CAPTURE',
  };
};

export const incrementGreenTime = () => {
  return {
    type: 'INCREMENT_GREEN_TIME',
  };
};

export const resetGreenTime = () => {
  return {
    type: 'RESET_GREEN_TIME',
  };
};

export const changeGreenTimeRequirement = (amount) => {
  return {
    type: 'CHANGE_GREEN_TIME_REQUIREMENT',
    amount,
  };
};

export const decrementScore = (amount) => {
  return {
    type: 'DECREMENT_SCORE',
    amount,
  };
};

export const resetScore = () => {
  return {
    type: 'RESET_SCORE',
  };
};

export const setKeyEventAsTargetNote = (keyEvent) => {
  return {
    type: 'SET_KEY_EVENT_AS_TARGET_NOTE',
    payload: keyEvent,
  };
};

export const setSungNote = (note) => {
  return {
    type: 'SET_SUNG_NOTE',
    payload: note,
  };
};

export const incrementTargetNoteIndex = () => {
  return {
    type: 'INCREMENT_TARGET_NOTE_INDEX',
  };
};

export const resetTargetNoteIndex = () => {
  return {
    type: 'RESET_TARGET_NOTE_INDEX',
  };
};

export const pushScoreToExerciseScoresArray = (score) => {
  return {
    type: 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY',
    payload: score,
  };
};


// user signup / login related action tasks
export const postNewUserToBackEndAfterSignUp = (email, firstName, lastName, password) => {
  return {
    type: 'POST_NEW_USER_TO_BACK_END_AFTER_SIGN_UP',
    payload: userInfo,
  }
}
