import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './ServicesSlice';

const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});

export default store;
