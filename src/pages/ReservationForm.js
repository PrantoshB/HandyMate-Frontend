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
    <div className="col-md container-main reservation-form-body p-0">
      <div className="reservation-form-overlay col-md p-2 m-0 d-flex flex-column align-items-center justify-content-center">
        <h1 className="heading text-light text-uppercase text-center">Create New Reservation</h1>
        <hr className="w-50 border-top-2 border-light" />
        <form onSubmit={handleSubmit} id="reservation-form" className="d-flex flex-column align-items-center g-6">
          <div className="d-flex input-row align-items-center g-4">
            <label htmlFor="userId">
              Name:
              {' '}
              {/* Display the full name from localStorage */}
              <input
                className="p-2 form-control"
                type="text"
                value={fullName}
                disabled
              />
            </label>
            <label htmlFor="locationId">

              <div className="select-wrapper">
                <select
                  className="p-2 px-0"
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
              </div>
            </label>
          </div>
          <div className="d-flex input-row align-items-center g-4">
            <label htmlFor="serviceId">

              <div className="select-wrapper">
                <select
                  className="p-2 px-0"
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
              </div>
            </label>
            <label htmlFor="startDate">
              From:&nbsp;
              <input
                className="p-2 form-control"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                name="startDate"
              />
            </label>
            <label htmlFor="endDate">
              To:&nbsp;
              <input
                className="p-2 form-control"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                name="endDate"
              />
            </label>

          </div>

          <button type="submit" className="btn btn-light text-success">Create Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
