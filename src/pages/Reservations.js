import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationCard from '../components/ReservationCard';
import { fetchReservations } from '../store/ReservationsSlice';
import { fetchServices } from '../store/ServicesSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchServices());
  }, []);

  const getServiceName = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.name : '';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {
        reservations.map((reservation) => (
          <ReservationCard
            startDate={reservation.start_date}
            endDate={reservation.end_date}
            serviceName={getServiceName(reservation.service_id)}
            userId={reservation.user_id}
            key={reservation.id}
          />
        ))
      }
    </div>
  );
};

export default Reservations;
