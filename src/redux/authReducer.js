import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loginAction, logoutAction } from './authActions';
import { setToken, removeToken } from '../config/axios';

const initialState = {
  user: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      setToken(action.payload.token);
      state.user = action.payload.user;
    })
    .addCase(logoutAction, () => {
      removeToken();
      return initialState;
    });
});

export default persistReducer(
  {
    key: 'auth',
    storage,
  },
  authReducer,
);
