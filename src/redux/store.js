import { configureStore } from '@reduxjs/toolkit';
import authSlice from './featurs/authSlice';
import productSlice from './featurs/productSlice';

const store = configureStore({
  reducer: {
    auth:authSlice,
    product:productSlice
  },
});

export default store;
