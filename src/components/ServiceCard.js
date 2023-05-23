import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ name, image }) => (
  <div>
    <img src={image} alt={name} />
    <h1>{name}</h1>
  </div>
);

export default ServiceCard;

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
