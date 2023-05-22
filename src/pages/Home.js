import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServiceCard from '../components/ServiceCard';
import { fetchServices } from '../store/ServicesSlice';
import carpenter from '../assets/carpenter.png';
import cleaning from '../assets/cleaning.png';
import electrician from '../assets/electrician.png';
import gardening from '../assets/gardening.png';
import moving from '../assets/moving.png';
import painter from '../assets/painter.png';
import plumber from '../assets/plumber.png';


const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.services.services);
  const images = [carpenter, cleaning, electrician, gardening, moving, painter, plumber]


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
              image={
                images[card.id - 1]
              } />
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