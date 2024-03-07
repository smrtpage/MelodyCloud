import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import authReducer from './authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const persistor = persistStore(store);
