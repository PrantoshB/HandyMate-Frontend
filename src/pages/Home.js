import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigation, A11y,
} from 'swiper';
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

        {
            cards.map((card) => (
              <SwiperSlide key={card.id}>
                <ServiceCard name={card.name} key={card.id} />
              </SwiperSlide>
            ))
        }

      </Swiper>
    </div>
  );
};

export default Home;
