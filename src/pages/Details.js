import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServices } from '../store/ServicesSlice';

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const service = services.find((service) => service.id === Number(id));

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  return (
    <div>
      <div>
        <p>
          ID
          {service.id}
        </p>
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
      <button type="button">Reserve</button>
    </div>
  );
};

export default Details;

// Details.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   details: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };
