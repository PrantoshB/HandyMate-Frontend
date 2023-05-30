import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const ServiceCard = () => {
    const service = [{
    name: 'Service 1',
    image: 'https://res.cloudinary.com/dx0nauane/image/upload/v1624349663/Service%20Card%20Images/Service_1_1_xqjz3c.jpg',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, sapien vitae aliquam dapibus, magna quam ultricies nunc, nec tincidunt nisl nunc vitae elit. ',
    price: 100,
    id: 1,
    }]
  const rating = Math.round((Math.random() * (5 - 4) + 4) * 10) / 10;

  return (
    <BrowserRouter>
    <div>
      <Link
        to={{
          pathname: `/services/${service.id}`,
        }}
        className="singlecard"
      >
        <img src={service.image} alt={name} />
        <h4 className="bold-font service-name">{service.name}</h4>
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
            {service.price}
          </span>
        </div>
        <p className="gray-font service-details">{service.details}</p>
        </Link>
    </div>
    </BrowserRouter>
  );
};

export default ServiceCard;
