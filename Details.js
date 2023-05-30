import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { fetchServices } from '../store/ServicesSlice';
import ReserveFromService from '../components/ReserveFromService';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const services = useSelector((state) => state.services.services);
  const service = services.find((service) => service.id === Number(id));

  const [showForm, setShowForm] = useState(false);

  const rating = Math.round((Math.random() * (5 - 4) + 4) * 10) / 10;

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
        <div className="d-flex flex-column align-items-center col-md col container-main justify-content-center p-4">

          <div className="container d-flex flex-row-md flex-column-sm justify-content-between">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <div className="row">
                <div className="col-12 text-center">
                  <img src={service.image} alt={service.name} className="shadow-lg img-fluid mx-auto" />
                </div>
              </div>

              <div className="col-12 mt-5">
                <button type="button" className="details-btn" onClick={handleReturn}>
                  <FaAngleLeft />
                  {' '}
                  Return
                </button>
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
        </div>
      ) : (
        <ReserveFromService serviceId={id} />
      )}
    </>
  );
};

export default Details;
