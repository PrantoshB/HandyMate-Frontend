import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteService } from '../store/ServicesSlice';

const DeleteServiceCard = ({ name, image, details }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteService(id));
  };
  return (
    <div className="col-md-12 delete-card d-flex p-4 align-items-center">
      <img src={image} alt="service" className="img-thumbnail rounded delete-img" />
      <h4 className="mx-5 my-3">{name}</h4>
      <p className="mx-3">{details}</p>
      <div>
        <button className="btn btn-danger delete-btn" type="button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteServiceCard;

DeleteServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
