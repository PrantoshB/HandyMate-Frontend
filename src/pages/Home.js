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
    <div style={StyleGreed}>
      {
            cards.map((card) => (
              <ServiceCard
              key={card.id}
              name={card.name} 
              image={card.image} />
            ))
        }
    </div>
  );
};

export default Home;

const StyleGreed = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  marginTop: '1rem',
};