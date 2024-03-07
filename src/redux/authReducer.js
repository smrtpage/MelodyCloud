import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authReducer = createReducer(null, (builder) => {
  builder.addCase();
});

export default persistReducer(
  {
    key: 'auth',
    storage,
  },
  authReducer,
);
