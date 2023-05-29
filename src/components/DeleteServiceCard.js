import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const DeleteServiceCard = ({name, image}) => {

  return (
    <div className="col-md-12 d-flex flex-column flex-md-row p-2 justify-content-between align-items-center delete-card">
      <div className='d-flex flex-wrap align-items-center m-3'>
      <img src={image} alt="service" className="img-thumbnail rounded m-2 delete-img" />
      <h4 >{name}</h4>
      </div>
      <div>
        <button className="btn btn-danger delete-btn" type="button">Delete</button>
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
