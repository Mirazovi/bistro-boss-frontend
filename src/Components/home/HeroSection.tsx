import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const HeroSection = () => {
    return (
        <>
            <div className='h-[700px] bg-[#1e232e] flex justify-center items-center my-10'>
                <Swiper
                    initialSlide={3}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination,Autoplay]}
                    // autoplay={{
                    //     delay:1000,
                    //     disableOnInteraction:false
                    // }}
                    className="mySwiper h-[500px] "
                    breakpoints={{
                        320: { slidesPerView: 1 }, 
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 }, 
                        1024: { slidesPerView: 3 }, 
                        1280: { slidesPerView: 4 }, 
                        1536: { slidesPerView: 5 }, 
                      }}
                >
                    <SwiperSlide>
                        <div className=' w-[400px] h-[500px] bg-[#1b1f2a] border-4 border-[rgba(255,255,255.1)] border-t-[#0099ff] border-b-[#0099ff] rounded-2xl'>

                            <img src='../../../public/assets/home/01.jpg' className=' w-full h-[350px] rounded-xl object-cover' />
                            <div className='text-white text-center'>
                                <h1 className='text-2xl'>Photography</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolor!</p>
                                <button className='py-2 px-6 rounded-lg text-white bg-purple-700'>Submit</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-[400px] h-[500px] bg-[#1b1f2a] border-4 border-[rgba(255,255,255.1)] border-t-[#0099ff] border-b-[#0099ff] rounded-2xl'>

                            <img src='../../../public/assets/home/02.jpg' className=' w-full h-[350px] rounded-xl object-cover' />
                            <div className='text-white text-center'>
                                <h1 className='text-2xl'>Photography</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolor!</p>
                                <button className='py-2 px-6 rounded-lg text-white bg-purple-700'>Submit</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-[400px] h-[500px] bg-[#1b1f2a] border-4 border-[rgba(255,255,255.1)] border-t-[#0099ff] border-b-[#0099ff] rounded-2xl'>

                            <img src='../../../public/assets/home/03.png' className=' w-full h-[350px] rounded-xl object-cover' />
                            <div className='text-white text-center'>
                                <h1 className='text-2xl'>Photography</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolor!</p>
                                <button className='py-2 px-6 rounded-lg text-white bg-purple-700'>Submit</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-[400px] h-[500px] bg-[#1b1f2a] border-4 border-[rgba(255,255,255.1)] border-t-[#0099ff] border-b-[#0099ff] rounded-2xl'>

                            <img src='../../../public/assets/home/04.jpg' className=' w-full h-[350px] rounded-xl object-cover' />
                            <div className='text-white text-center'>
                                <h1 className='text-2xl'>Photography</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolor!</p>
                                <button className='py-2 px-6 rounded-lg text-white bg-purple-700'>Submit</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-[400px] h-[500px] bg-[#1b1f2a] border-4 border-[rgba(255,255,255.1)] border-t-[#0099ff] border-b-[#0099ff] rounded-2xl'>

                            <img src='../../../public/assets/home/05.png' className=' w-full h-[350px] rounded-xl object-cover' />
                            <div className='text-white text-center'>
                                <h1 className='text-2xl'>Photography</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolor!</p>
                                <button className='py-2 px-6 rounded-lg text-white bg-purple-700'>Submit</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-[400px] h-[500px] bg-[#1b1f2a] border-4 border-[rgba(255,255,255.1)] border-t-[#0099ff] border-b-[#0099ff] rounded-2xl'>

                            <img src='../../../public/assets/home/06.png' className=' w-full h-[350px] rounded-xl object-cover' />
                            <div className='text-white text-center'>
                                <h1 className='text-2xl'>Photography</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolor!</p>
                                <button className='py-2 px-6 rounded-lg text-white bg-purple-700'>Submit</button>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
                
            </div>
        </>
    )
}

export default HeroSection