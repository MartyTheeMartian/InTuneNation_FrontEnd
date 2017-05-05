import store from '../store';
import axios from 'axios';

// import { setKeyEventAsTargetNote,
//           incrementGreenTime,
//           resetGreenTime,
//           decrementScore,
//           resetScore,
//           incrementTargetNoteIndex,
//           resetTargetNoteIndex,
//           setAllPastExercises,
//           pushScoreToExerciseScoresArray,
//           pushExerciseToProfileHistory,
//           setSungNote,
//           toggleAudioCapture,
//          } from '../actions';

const { dispatch, getState } = store;

// const postNewExerciseToProfile = (userId, keyNumCombo) => {
//   const API_URL = `https://ppp-capstone-music.herokuapp.com/users/${userId}/exercises`;
//   // return axios.post(API_URL, { notes_array: keyNumCombo })
//   // .then((response) => { return response.data; });
//   return fetch(API_URL, {
//     method: 'POST',
//     mode: 'no-cors',
//     body: { notes_array: keyNumCombo }
//   }).then((response) => {
//     return response;
//   })
// }

const updateExerciseWithNewScores = (userId, exerciseId, scores_array) => {
  const API_URL = `https://ppp-capstone-music.herokuapp.com/users/${userId}/exercises/${exerciseId}/scores`;
  const avg_score = (scores_array.reduce((acc, val) => { return acc + val; })) / scores_array.length;
  return axios.post(API_URL, { scores_array, avg_score })
  .then((response) => { return response.data; });
};

const scorePostingUtility = (userId, exerciseId, scores_array) => {
  const API_URL = `https://ppp-capstone-music.herokuapp.com/users/${userId}/exercises/${exerciseId}/scores`;
  const avg_score = (scores_array.reduce((acc, val) => { return acc + val; })) / scores_array.length;
  console.log('avg_score === ', avg_score);
  const config = { headers: { token: localStorage.getItem('token') } };
  return axios.post(API_URL, { scores_array, avg_score }, config)
  .then((response) => { return response.data; });
};

export default scorePostingUtility;
