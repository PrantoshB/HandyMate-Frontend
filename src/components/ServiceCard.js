import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const ServiceCard = ({
  name, image, details, rating, price, id,
}) => (

  <div>
    <Link
      to={{
        pathname: `/services/${id}`,
        state: { name, image, details },
      }}
      className="singlecard"
    >
      <img src={image} alt={name} />
      <h4 className="bold-font service-name">{name}</h4>
      <hr className="dash" />
      <div className="service-rating-price">
        <span className="bold-font gray-font">
          <i className="fa-sharp fa-solid fa-star-half-stroke" />
          {' '}
          {rating}
        </span>
        <span className="service-circle-splitter" />
        <span className="bold-font gray-font">
          <i className="fa-solid fa-dollar-sign" />
          {' '}
          {price}
        </span>
      </div>
      <p className="gray-font service-details">{details}</p>
    </Link>
=======
const ServiceCard = ({ name, image, details }) => (
  <div className="slide">
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <p>{details}</p>
>>>>>>> 9dfc3dd (Add slider in home page)
  </div>
);

export default ServiceCard;

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
