import React from 'react';
import PropTypes from 'prop-types';

const DeleteServiceCard = ({ name, image, details }) => (
  <div className="col-md-12">
    
    <h3>{name}</h3>
    <p>{details}</p>
  </div>
);

export default DeleteServiceCard;

DeleteServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};