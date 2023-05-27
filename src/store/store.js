import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './ServicesSlice';
import reservationReducer from './ReservationsSlice';
import locationReducer from './LocationsSlice';
import userReducer from './UsersSlice';

const store = configureStore({
  reducer: {
    services: serviceReducer,
    reservations: reservationReducer,
    locations: locationReducer,
    users: userReducer,
  },
});

export default store;
