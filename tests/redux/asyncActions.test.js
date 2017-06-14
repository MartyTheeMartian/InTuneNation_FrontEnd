import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import axios from 'axios';
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
    afterEach(() => {
      nock.cleanAll();
    });

    it('does stuff', () => {
      nock('');
    });
  });

  describe('postLogIn', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('user login API call achieves information successfully', () => {
      const user = {
        email: 'kvinzheng@gmail.com',
        password: 'youreawizard',
      };
      const result = {
        id: 2,
        firstName: 'Kevin',
        lastName: 'Zheng',
        email: 'kvinzheng@gmail.com',
        profilePicture: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5NzQ2MTgxNywiZXhwIjoxNDk4MDY2NjE3fQ.XQSwyaNAg9z75LpxlDppkPhO1a4VzWG9OXBH76onG0E',
      };
      nock('https://ppp-capstone-music.herokuapp.com')
        .post('/user/login', user)
        .reply(result);
    });

    it('returns the expected action', () => {
      const API_URL = 'https://ppp-capstone-music.herokuapp.com/user/login';
      const user = {
        email: 'kvinzheng@gmail.com',
        password: 'youreawizard',
      };
      const payload = axios.post(API_URL, user);
      const expectedAction = {
        type: 'USER_LOG_IN',
        payload,
      };
      expect(postLogIn(user)).toEqual(expectedAction);
    });
  });

  describe('fetchAllPastExercises', () => {});

  describe('setAllPastExercises', () => {});

  describe('doSearchExercises', () => {});

  describe('postExercise', () => {});

  describe('setExerciseId', () => {});
});
