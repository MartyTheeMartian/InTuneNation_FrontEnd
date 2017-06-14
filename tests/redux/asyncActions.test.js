import nock from 'nock';
import expect from 'expect';

import {
  loadPastExercisesData,
  loadSpecificExercisesIDwithAllScoresData,
  postSignUp,
  postLogIn,
  fetchAllPastExercises,
  setAllPastExercises,
  doSearchExercises,
  postExercise,
  setExerciseId
} from '../../src/actions';

describe('asynchronous actions', () => {
  describe('loadPastExercisesData', () => {});

  describe('loadSpecificExercisesIDwithAllScoresData', () => {});

  describe('postSignUp', () => {
    // afterEach(() => {
    //   nock.cleanAll();
    // });
    //
    // it('creates USER_LOG_IN_FULFILLED when fetching a users login info was successful', () => {
    //   nock('')
    // });
  });

  describe('postLogIn', () => {
    // afterEach(() => {
    //   nock.cleanAll();
    // });
    //
    // it('creates USER_LOG_IN_FULFILLED when fetching a users login info was successful', () => {
    //   nock('https://ppp-capstone-music.herokuapp.com/user/login')
    //     .post()
    // });
  });

  describe('fetchAllPastExercises', () => {});

  describe('setAllPastExercises', () => {});

  describe('doSearchExercises', () => {});

  describe('postExercise', () => {});

  describe('setExerciseId', () => {});
});
