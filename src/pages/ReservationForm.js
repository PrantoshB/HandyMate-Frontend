import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReservation } from '../store/ReservationsSlice';
import { fetchLocations } from '../store/LocationsSlice';
import { fetchServices } from '../store/ServicesSlice';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locations = useSelector((state) => state.locations.locations);
  const services = useSelector((state) => state.services.services);
  const userId = localStorage.getItem('userId');
  const fullName = localStorage.getItem('full_name'); // Retrieve the full name from localStorage

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchServices());
  }, [dispatch]);

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
    setLocationId('');

    // Redirect to "/reservations"
    navigate('/reservations');
  };

  return (
    <div className="col-md reservation-body p-2">
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
            Service:
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              name="serviceId"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="userId">
            Full Name:
            {' '}
            {/* Display the full name from localStorage */}
            <input
              type="text"
              value={fullName}
              disabled
            />
          </label>
        </div>
        <div>
          <label htmlFor="locationId">
            Location:
            <select
              value={locationId}
              onChange={(e) => setLocationId(e.target.value)}
              name="locationId"
            >
              <option value="">Select a location</option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
