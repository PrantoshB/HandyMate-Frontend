import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './ServicesSlice';
import reservationReducer from './ReservationsSlice';

const store = configureStore({
  reducer: {
    services: serviceReducer,
    reservations: reservationReducer,
  },
});

export default store;
