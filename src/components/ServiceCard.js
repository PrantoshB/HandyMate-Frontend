import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ name, image, details }) => (
  <div className="slide">
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <p>{details}</p>
  </div>
);

export default ServiceCard;

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
