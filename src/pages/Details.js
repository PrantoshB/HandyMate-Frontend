import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { fetchServices } from '../store/ServicesSlice';
import ReserveFromService from '../components/ReserveFromService';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rating = searchParams.get('rating');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const services = useSelector((state) => state.services.services);
  const service = services.find((service) => service.id === Number(id));

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleReserveClick = () => {
    setShowForm(true);
  };
  const handleReturn = () => {
    navigate('/');
  };
  return (
    <>
      {!showForm ? (
        <div className="row">
          <h1 id="details-heading">Details</h1>
          <div className="col-md-6 d-flex flex-column align-items-center">
            <div className="row">
              <div className="col-12 text-center">
                <img src={service.image} alt={service.name} className="shadow-lg img-fluid mx-auto" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="button" className="details-btn" onClick={handleReturn} style={{ marginLeft: '-15px' }}>
                  <FaAngleLeft />
                  {' '}
                  Return
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 ">
            <h2>{service.name}</h2>
            <table className="table table-striped ">
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>{service.details}</td>
                </tr>
                <tr>
                  <td>Service charge</td>
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
                <tr>
                  <td>Rating</td>
                  <td>
                    {' '}
                    <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                    <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                    <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                    <i className="fa-sharp fa-solid fa-star" style={{ color: '#008003' }} />
                    <i className="fa-sharp fa-solid fa-star-half-stroke" />
                    {' '}
                    {rating}
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" onClick={handleReserveClick} className="details-btn">Reserve</button>
          </div>
        </div>
      ) : (
        <ReserveFromService serviceId={id} />
      )}
    </>
  );
};

export default Details;
