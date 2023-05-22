import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReservationCard from '../components/ReservationCard';
import { fetchReservations } from '../store/ReservationsSlice';
import { fetchServices } from '../store/ServicesSlice';
import { fetchLocations } from '../store/LocationsSlice';
import { fetchUsers } from '../store/UsersSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const services = useSelector((state) => state.services.services);
  const locations = useSelector((state) => state.locations.locations);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchServices());
    dispatch(fetchLocations());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getLocationName = (locationId) => {
    const location = locations.find((l) => l.id === locationId);
    return location ? location.name : '';
  };

  const getServiceName = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.name : '';
  };

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.full_name : '';
  };

  return (
  // add reservation button with link to /reserve
    <>
      <Link to="/reserve">Add Reservation</Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {
        reservations.map((reservation) => (
          <ReservationCard
            startDate={reservation.start_date}
            endDate={reservation.end_date}
            serviceName={getServiceName(reservation.service_id)}
            userName={getUserName(reservation.user_id)}
            locationName={getLocationName(reservation.location_id)}
            key={reservation.id}
          />
        ))
      }
      </div>
    </>
  );
};

export default Reservations;
