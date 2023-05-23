import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReservation } from '../store/ReservationsSlice';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [userId, setUserId] = useState('');
  const [locationId, setLocationId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the reservation data object
    const reservationData = {
      start_date: startDate,
      end_date: endDate,
      service_id: parseInt(serviceId, 10),
      user_id: parseInt(userId, 10),
      location_id: parseInt(locationId, 10),
    };

    // Dispatch the createReservation action
    dispatch(createReservation(reservationData));

    // Reset the form
    setStartDate('');
    setEndDate('');
    setServiceId('');
    setUserId('');
    setLocationId('');

    // Redirect to "/reservations"
    navigate('/reservations');
  };

  return (
    <div>
      <h1>Create New Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startDate">
            Start Date:

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              name="startDate"
            />
          </label>
        </div>
        <div>
          <label htmlFor="endDate">
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              name="endDate"
            />
          </label>
        </div>
        <div>
          <label htmlFor="serviceId">
            Service ID:
            <input
              type="number"
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              name="serviceId"
            />
          </label>
        </div>
        <div>
          <label htmlFor="userId">
            User ID:
            <input
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              name="userId"
            />
          </label>
        </div>
        <div>
          <label htmlFor="locationId">
            Location ID:
            <input
              type="number"
              value={locationId}
              onChange={(e) => setLocationId(e.target.value)}
              name="locationId"
            />
          </label>
        </div>
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
