import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteService } from '../store/ServicesSlice';

const DeleteServiceCard = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteService(id));
  };
  return (
    <div className="col-md-12 d-flex flex-column flex-md-row p-2 justify-content-between align-items-center delete-card">
      <div className="d-flex flex-wrap align-items-center m-3">
        <img src={image} alt="service" className="img-thumbnail rounded m-2 delete-img" />
        <h4>{name}</h4>
      </div>
      <div>
        <button className="btn btn-danger delete-btn" type="button" onClick={() => handleDeleteClick(id)}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteServiceCard;

DeleteServiceCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
