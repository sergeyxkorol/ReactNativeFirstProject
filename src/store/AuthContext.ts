import * as React from 'react';
import AuthActions from './AuthActions';
import {authState} from './AuthReducer';

const AuthContext = React.createContext({
  state: authState,
  actions: AuthActions,
});

export default AuthContext;
