import {LOG_IN, LOG_OUT, RESTORE_TOKEN} from './constants';

export const authState = {
  isLoading: true,
  isLogout: false,
  userToken: null,
};

export default function AuthReducer(state, action) {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case LOG_IN:
      return {
        ...state,
        isLogout: false,
        userToken: action.token,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogout: true,
        userToken: null,
      };
  }
}
