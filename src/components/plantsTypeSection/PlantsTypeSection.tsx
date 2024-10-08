import Container from '../../utils/Container';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

type TPlant = {
   id: number;
   img: string;
   plantsType: string;
};

const PlantsTypeSection = () => {
   const [platsData, setPlantsData] = useState([]);

   useEffect(() => {
      fetch('/jsonData/plantsType.json')
         .then(res => res.json())
         .then(data => setPlantsData(data));
   }, []);

   return (
      <Container className="my-4 md:my-12">
         <h2 className="text-xl md:text-2xl font-semibold py-3 md:py-6 text-green-800">
            Shop By Plants Type
         </h2>

         <Swiper
            slidesPerView={5}
            spaceBetween={20}
            freeMode={true}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
               // when window width is >= 320px
               320: {
                  slidesPerView: 2,
               },
               // when window width is >= 480px
               480: {
                  slidesPerView: 3,
               },
               // when window width is >= 768px
               768: {
                  slidesPerView: 4,
               },
               // when window width is >= 1024px
               1024: {
                  slidesPerView: 5,
               },
               // when window width is >= 1200px
               1200: {
                  slidesPerView: 6,
               },
            }}
         >
            {platsData?.map((plant: TPlant) => (
               <SwiperSlide key={plant?.id}>
                  <div className="card bg-base-100 rounded-none shadow-xl h-[200px] md:h-full">
                     <figure>
                        <img
                           className="h-full w-full"
                           src={plant?.img}
                           alt="Shoes"
                        />
                     </figure>
                     <div className="pt-2 pb-8 ">
                        <div className=" justify-center">
                           <div className="badge badge-sm text-sm md:badge-md badge-outline">
                              {plant?.plantsType}
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}

            {/* <SwiperSlide>Slide 9</SwiperSlide> */}
         </Swiper>
      </Container>
   );
};

export default PlantsTypeSection;
