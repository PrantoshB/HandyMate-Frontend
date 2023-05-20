// create reservationSlice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
};

const reservationSlice = createSlice(
  {
    name: 'reservations',
    initialState,
    reducers: {
      setReservations(state, action) {
        state.reservations = action.payload;
      },
    },
  },
);

export const { setReservations } = reservationSlice.actions;

export default reservationSlice.reducer;

const fetchReservations = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/reservations');
  const data = await response.json();
  dispatch(setReservations(data));
};

export { fetchReservations };
