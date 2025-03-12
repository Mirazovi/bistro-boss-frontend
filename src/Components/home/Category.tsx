import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import SectionTitle from '../shared/SectionTitle';

const Category = () => {
  return (
    <>
    <section >
        <SectionTitle heading={'---From 11:00am to 10:00pm---'} subheading={'ORDER ONLINE'}>

        </SectionTitle>
    </section>
    <div className="h-[500px] my-10">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, 
          1280: { slidesPerView: 5 }, 
        }}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className="w-full h-[450px] object-cover rounded-2xl" src="/assets/home/slide1.jpg" alt="Slide 1" />
          <h1 className='absolute bottom-8 left-1/2 -translate-x-1/2  text-4xl text-white font-semibold'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full h-[450px] object-cover rounded-2xl" src="/assets/home/slide2.jpg" alt="Slide 2" />
          <h1 className='absolute bottom-8 left-1/2 -translate-x-1/2  text-4xl text-white font-semibold'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full h-[450px] object-cover rounded-2xl" src="/assets/home/slide3.jpg" alt="Slide 3" />
          <h1 className='absolute bottom-8 left-1/2 -translate-x-1/2  text-4xl text-white font-semibold'>Desert</h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full h-[450px] object-cover rounded-2xl" src="/assets/home/slide1.jpg" alt="Slide 1" />
          <h1 className='absolute bottom-8 left-1/2 -translate-x-1/2  text-4xl text-white font-semibold'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full h-[450px] object-cover rounded-2xl" src="/assets/home/slide2.jpg" alt="Slide 2" />
          <h1 className='absolute bottom-8 left-1/2 -translate-x-1/2  text-4xl text-white font-semibold'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full h-[450px] object-cover rounded-2xl" src="/assets/home/slide3.jpg" alt="Slide 3" />
          <h1 className='absolute bottom-8 left-1/2 -translate-x-1/2  text-4xl text-white font-semibold'>Salad</h1>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default Category;
