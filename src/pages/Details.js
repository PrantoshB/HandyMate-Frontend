import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServices } from '../store/ServicesSlice';
import ReserveFromService from '../components/ReserveFromService';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const service = services.find((service) => service.id === Number(id));

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleReserveClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {!showForm ? (
        <div>
          <div>
            <h1>Details</h1>
            <img src={service.image} alt={service.name} />
          </div>
          <div>
            <h2>{service.name}</h2>
            <table>
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>{service.details}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{service.price}</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>
                    {service.duration}
                    {' '}
                    minutes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button type="button" onClick={handleReserveClick} className="btn btn-warning">
            Reserve
          </button>
        </div>
      ) : (
        <ReserveFromService serviceId={id} />
      )}
    </>
  );
};

export default Details;
