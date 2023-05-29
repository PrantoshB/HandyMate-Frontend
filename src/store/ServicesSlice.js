import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [],
};

const servicesSlice = createSlice(
  {
    name: 'services',
    initialState,
    reducers: {
      setServices(state, action) {
        state.services = action.payload;
      },
    },
  },
);

export const { setServices } = servicesSlice.actions;

export default servicesSlice.reducer;

const fetchServices = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/services');
  const data = await response.json();
  dispatch(setServices(data));
};

const addService = (service) => async (dispatch) => {
  await fetch('http://localhost:3000/api/v1/services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(service),
  });
  dispatch(fetchServices());
};

const deleteService = (id) => async (dispatch) => {
  await fetch(`http://localhost:3000/api/v1/services/${id}`, {
    method: 'DELETE',
  });
  dispatch(fetchServices());
};

export { fetchServices, addService, deleteService };
