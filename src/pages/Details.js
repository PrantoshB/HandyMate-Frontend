import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchServices } from '../store/ServicesSlice';
import '../assets/styles/details.css';

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const services = useSelector((state) => state.services.services);
  const service = services.find((service) => service.id === Number(id));

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleReturn = () => {
    navigate('/');
  };
  return (
    <div className="row">
      <h1 id="details-heading">{service.name}</h1>
      <div className="col-md-8 p-5">
        <img src={service.image} alt={service.name} className="shadow-lg ml-md-4 img-fluid" />
        <button type="button" className="btn btn-success rounded-pill mt-5" onClick={handleReturn}>
          {'<'}
          {' '}
          Return
        </button>
      </div>
      <div className="col-md-4 ">
        <h2>Details</h2>
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td>Description</td>
              <td>{service.details}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                $
                {service.price}
              </td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>
                {service.duration}
                {' '}
                hours
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-success rounded-pill">Reserve</button>
      </div>
    </div>
  );
};

export default Details;
