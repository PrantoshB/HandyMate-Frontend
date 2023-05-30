import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const DeleteServices = () => {
  const services = [{
    name: 'Service 1',
    image: 'https://res.cloudinary.com/dx0nauane/image/upload/v1624349663/Service%20Card%20Images/Service_1_1_xqjz3c.jpg',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, sapien vitae aliquam dapibus, magna quam ultricies nunc, nec tincidunt nisl nunc vitae elit. ',
    price: 100,
    id: 1,
  }];
  return (
    <BrowserRouter>
      <div className="container-fluid p-5">
        {services.map((service) => (
          <div className="row g-3 p-3" key={service.id}>

            <div>
              {service.id}
              {service.id}
              {service.name}
              {service.image}
              {service.details}
            </div>

          </div>
        ))}
      </div>
    </BrowserRouter>
  );
};

export default DeleteServices;
