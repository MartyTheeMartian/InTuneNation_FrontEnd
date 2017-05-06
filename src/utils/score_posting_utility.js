import axios from 'axios';

const scorePostingUtility = (userId, exerciseId, scores_array) => {
  const API_URL = `https://ppp-capstone-music.herokuapp.com/users/${userId}/exercises/${exerciseId}/scores`;
  const avg_score = (scores_array.reduce((acc, val) => { return acc + val; })) / scores_array.length;
  const config = { headers: { token: localStorage.getItem('token') } };
  return axios.post(API_URL, { scores_array, avg_score }, config)
  .then((response) => { return response.data; });
};

export default scorePostingUtility;
