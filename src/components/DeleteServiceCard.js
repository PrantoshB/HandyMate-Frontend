import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteService } from '../store/ServicesSlice';

const DeleteServiceCard = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    dispatch(deleteService(id));
    setShowConfirmation(false);
  };

  return (
    <div className="col-md-12 d-flex flex-column flex-md-row p-2 justify-content-between align-items-center delete-card">
      <div className="d-flex flex-wrap align-items-center m-3">
        <img src={image} alt="service" className="img-thumbnail rounded m-2 delete-img" />
        <h4>{name}</h4>
      </div>
      <div>
        {showConfirmation ? (
          <div className="confirmation-message d-flex flex-column align-items-end">
            <p>
              Are you sure you want to delete the service
              {' '}
              {name}
              ? This action cannot be undone.
            </p>
            <div className="d-flex g-2 justify-content-end">
              <button className="btn btn-danger" type="button" onClick={handleDeleteClick}>
                Confirm Delete
              </button>
              <button className="btn btn-secondary" type="button" onClick={() => setShowConfirmation(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="btn btn-danger delete-btn" type="button" onClick={() => setShowConfirmation(true)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

DeleteServiceCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DeleteServiceCard;
