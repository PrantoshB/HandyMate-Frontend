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
    <div className="home col-md-10">
      <h1 className="bold-font homepage-heading">
        OUR SERVICES
      </h1>
      <p className="gray-font">
        Please select a HandyMate service
      </p>
      <hr className="dash home-dash" />
      <div className="carousel-container col-md-12">

        <Swiper
          className="service-list col-md-10"
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={isMobile ? 1 : 3}
          navigation
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
            >
              <ServiceCard
                name={card.name}
                image={card.image}
                details={card.details}
                price={card.price}
                id={card.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
