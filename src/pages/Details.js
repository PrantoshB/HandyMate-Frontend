import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices } from '../store/ServicesSlice';

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const service = services.find((service) => service.id === Number(id));

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleReserveClick = () => {
    navigate('/reserve', { state: { serviceId: service.id.toString() } });
  };

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
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
  );
};

export default Details;
