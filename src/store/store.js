import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './ServicesSlice';
import reservationReducer from './ReservationsSlice';
import locationReducer from './LocationsSlice';

const store = configureStore({
  reducer: {
    services: serviceReducer,
    reservations: reservationReducer,
    locations: locationReducer,
  },
});

export default store;
