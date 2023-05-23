import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServiceCard from '../components/ServiceCard';
import { fetchServices } from '../store/ServicesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div>
      {
            cards.map((card) => (
              <ServiceCard name={card.name} key={card.id} />
            ))
        }
    </div>
  );
};

export default Home;
