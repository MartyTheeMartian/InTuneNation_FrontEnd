
const searchAllExercises = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_USER_EXERCISES_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
};

export default searchAllExercises;
