import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ name, image }) => (
  <div style={Card}>
    <img src={image} alt={name} />
    <h1>{name}</h1>
  </div>
);

export default ServiceCard;

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
};

const Card = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s linear',
  cursor: 'pointer'
};