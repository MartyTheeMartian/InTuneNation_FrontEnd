
const searchAllExercises = (state = {}, action ) => {
  // console.log('action ==', action);
  console.log('what is searchAllExercises', state);
  switch (action.type) {
    case 'SEARCH_USER_EXERCISES_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
};

export default searchAllExercises;
