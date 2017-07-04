import signupReducer from '../../../src/reducers/signUp.js';

describe('signupReducer', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = signupReducer(undefined, {});
    expect(nextState).toEqual({signupSuccess: null});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = {};
    const nextState = signupReducer(prevState, {type: 'FOOBAR'});
    expect(nextState).toBe(prevState);
    //toBe compare memory alocation
    //toEqual deep compare value
  });

  it('returns a new state with the specified sign up account set on it', function() {
    const prevState = {};
    const action = {
      type: 'USER_SIGN_UP_FULFILLED',
      payload: {
        data: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5NzgxNDg5MywiZXhwIjoxNDk4NDE5NjkzfQ.vAG1sQ1lUHh9hZmLmFk4ToIUb9bYRBcT2x3q7tnJFE0",
          id: "2",
          firstName: "Kevin",
          lastName: "Zheng",
          email: "kvinzheng@gmail.com",
          profile_picture: "https://lh4.googleusercontent.com/-Ro0sSQVz7s0/AAAAAAAAAAI/AAAAAAAAAZ4/Ip6fTqSbzAk/photo.jpg?sz=2200"
        },
      }
    }
    const nextState = signupReducer(prevState, action);
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5NzgxNDg5MywiZXhwIjoxNDk4NDE5NjkzfQ.vAG1sQ1lUHh9hZmLmFk4ToIUb9bYRBcT2x3q7tnJFE0",
      id: "2",
      firstName: "Kevin",
      lastName: "Zheng",
      email: "kvinzheng@gmail.com",
      profile_picture: "https://lh4.googleusercontent.com/-Ro0sSQVz7s0/AAAAAAAAAAI/AAAAAAAAAZ4/Ip6fTqSbzAk/photo.jpg?sz=2200",
      signupSuccess: true
    } );
  });
});
