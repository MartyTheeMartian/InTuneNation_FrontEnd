import axios from 'axios';
import store from '../store';

const { getState } = store;

const formatData = () => {
  let data = getState().allScorePerExercise;
  let d3Format = data.map((obj) => {
    return obj.avg_score;
  });
  return ['All Average Scores', ...d3Format];
}

let averageScore = {
  columns: formatData(),
};


module.exports = {
  averageScore,
};
