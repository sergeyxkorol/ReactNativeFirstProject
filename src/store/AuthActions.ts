import {LOG_IN, LOG_OUT} from './constants';

const AuthActions = dispatch => ({
  logIn: async data => {
    dispatch({type: LOG_IN, payload: {userToken: ''}});
  },

  logOut: () => {
    dispatch({type: LOG_OUT});
  },

  signUp: async data => {
    dispatch({type: LOG_IN, payload: {userToken: ''}});
  },
});

export default AuthActions;
