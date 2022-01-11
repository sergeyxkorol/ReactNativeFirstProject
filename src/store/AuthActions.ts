import {API_URL, OAUTH_URL} from '../constants';

const AuthActions = {
  logIn: async (email, password) => {
    let userToken = null;

    try {
      const tokenResponse = await fetch(OAUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'password',
          username: email,
          password: password,
        }),
      });

      userToken = await tokenResponse.json();
    } catch (error) {
      console.error(error);
    }

    return userToken;
  },

  logOut: () => {},

  signUp: async (email, password, passwordConfirmation) => {
    const requestData = {
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation,
        public_metadata: {
          user_segment: 'supplier',
        },
        private_metadata: {
          has_abandoned_cart: false,
        },
      },
    };

    let result = null;

    try {
      const signUpResponse = await fetch(`${API_URL}/account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
        body: JSON.stringify(requestData),
      });

      result = await signUpResponse.json();
    } catch (error) {
      console.error(error);
    }

    return result;
  },
};

export default AuthActions;
