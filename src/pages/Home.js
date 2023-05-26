import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ServiceCard from '../components/ServiceCard';
import { fetchServices } from '../store/ServicesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  const isMobile = window.innerWidth <= 768;
  return (
<<<<<<< HEAD
    <div>
      {
        cards.map((card) => (
          <ServiceCard
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            details={card.details}
          />
        ))
      }
=======
    <div
      className="col-md-10 carousel-container"
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <Swiper
        className="service-list"
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={isMobile ? 1 : 3}
        navigation
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <ServiceCard
              key={card.id}
              name={card.name}
              image={card.image}
              details={card.details}
            />
          </SwiperSlide>
        ))}
      </Swiper>
>>>>>>> 9dfc3dd (Add slider in home page)
    </div>
  );
};

export default Home;
