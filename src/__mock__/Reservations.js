import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import ReservationCard from '../components/ReservationCard';
import { fetchReservations } from '../store/ReservationsSlice';
import { fetchServices } from '../store/ServicesSlice';
import { fetchLocations } from '../store/LocationsSlice';
import { fetchUsers } from '../store/UsersSlice';

const Reservations = () => {
  const users = [{
    full_name: 'User 1',
    email: 't@gmail.com',
    password: '123456',
    role: 'user',
    id: 1,
  }];
  const locations = [{
    name: 'Location 1',
    id: 1,
  }];
  const services = [{
    name: 'Service 1',
    image: 'https://res.cloudinary.com/dx0nauane/image/upload/v1624349663/Service%20Card%20Images/Service_1_1_xqjz3c.jpg',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, sapien vitae aliquam dapibus, magna quam ultricies nunc, nec tincidunt nisl nunc vitae elit. ',
    price: 100,
    id: 1,
  }];
  const reservations = [{
    start_date: '2021-06-30T00:00:00.000Z',
    end_date: '2021-07-01T00:00:00.000Z',
    service_id: 1,
    user_id: 1,
    location_id: 1,
    id: 1,
  }];

  const userId = localStorage.getItem('userId');

  const getLocationName = (locationId) => {
    const location = locations.find((l) => l.id === locationId);
    return location ? location.name : '';
  };

  const getServiceName = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.name : '';
  };

  const getServiceImage = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.image : '';
  };

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.full_name : '';
  };

  const userRole = localStorage.getItem('role');
  const userReservations = userRole === 'admin'
    ? reservations
    : reservations.filter((reservation) => reservation.user_id === Number(userId));

  return (
    <BrowserRouter>
      <div className="col-md col container-main d-flex flex-column reservations align-items-center p-3">
        <div className="reservation-list container">
          <Link className="btn btn-success my-4 align-self-end" to="/reserve">Add Reservation</Link>
          {userReservations.map((reservation) => (
            <ReservationCard
              startDate={reservation.start_date}
              endDate={reservation.end_date}
              serviceName={getServiceName(reservation.service_id)}
              userName={getUserName(reservation.user_id)}
              locationName={getLocationName(reservation.location_id)}
              reservationId={reservation.id}
              serviceImage={getServiceImage(reservation.service_id)}
              key={reservation.id}
            />
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Reservations;
