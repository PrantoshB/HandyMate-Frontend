import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ name }) => (
  <div className="slide">
    <h1>{name}</h1>
  </div>
);

export default ServiceCard;

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
};
