import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  name, image, details, id,
}) => (
  <div>
    <Link to={{
      pathname: `/details/${id}`,
      state: { name, image, details },
    }}
    >
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{details}</p>
    </Link>
  </div>
);

export default ServiceCard;

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
