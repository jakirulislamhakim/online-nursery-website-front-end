import Container from '../../utils/Container';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiperStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
   return (
      <Container>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <img
                  className="max-h-[250px] md:max-h-[400px] lg:max-h-[500px] object-cover"
                  src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/collection.webp"
                  alt="Tree Image"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  className="max-h-[250px] md:max-h-[400px] lg:max-h-[500px] object-cover"
                  src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/at-home.webp"
                  alt="Tree Image"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  className="max-h-[250px] md:max-h-[400px] lg:max-h-[500px] object-cover"
                  src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/garden.webp"
                  alt="Tree Image"
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  className="max-h-[250px] md:max-h-[400px] lg:max-h-[500px] object-cover"
                  src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/plants.webp"
                  alt="Tree Image"
               />
            </SwiperSlide>
         </Swiper>
      </Container>
   );
};

export default HeroSection;
