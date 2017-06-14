import nock from 'nock';
import axios from 'axios';
import expect from 'expect';

import {
  config,
  loadPastExercisesData,
  loadSpecificExercisesIDwithAllScoresData,
  postSignUp,
  postLogIn,
  fetchAllPastExercises,
  setAllPastExercises,
  postExercise,
  setExerciseId,
} from '../../src/actions';

describe('asynchronous actions', () => {
  describe('loadPastExercisesData', () => {});

  describe('loadSpecificExercisesIDwithAllScoresData', () => {
    it('should return the expected action', () => {
      const userId = 14;
      const exerciseID = 23;
      const configuration = { headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE0OTc0NjM4MjAsImV4cCI6MTQ5ODA2ODYyMH0.Y3MtoBQZvAybBpiUKlOjs_NEz__dGCv9vmuPG-ttXtk' } };
      const API_URL = `https://ppp-capstone-music.herokuapp.com/users/${userId}/exercises/${exerciseID}/scores`;
      const data = axios.get(API_URL, configuration);
      const result = [
        {
          id: 24,
          user_id: 14,
          exercises_id: 23,
          scores_array: '[88.5,34,87]',
          avg_score: 69.8333,
          created_at: '2017-06-14T18:14:24.515Z',
          updated_at: '2017-06-14T18:14:24.515Z',
        },
      ];
      const expectedAction = {
        type: 'ALL_INTONATION_PER_EXERCISE',
        payload: data,
      };
      expect(loadSpecificExercisesIDwithAllScoresData(userId, exerciseID)).toEqual(expectedAction);
      // expect(data).toEqual(result);
    });
  });

  // describe('postSignUp', () => {
  //   afterEach(() => {
  //     nock.cleanAll();
  //   });
  //
  //   it('does stuff', () => {
  //     nock('');
  //   });
  //
  //   it('returns the expected action', () => {
  //     const API_URL = `https://ppp-capstone-music.herokuapp.com/user/signup`;
  //     const data = axios.post(API_URL, user);
  //     const expectedAction = {
  //       type: 'USER_SIGN_UP',
  //       payload: data,
  //     };
  //   });
  //
  // });

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

  describe('postExercise', () => {});

  describe('setExerciseId', () => {});
});
