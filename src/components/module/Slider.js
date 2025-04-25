"use client"
import about3 from '../../../public/images/sample1.png'
import Image from "next/image";
import shape2 from '../../../public/images/shape2.svg'
import shape3 from '../../../public/images/shape3.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Slider() {

    return (
        <>
            <div className='px-10 flex-col items-center justify-center h-screen py-20'>
                <div className=" text-center visibility: visible opacity: 1"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <div className='flex'>
                        <Image src={shape2}
                            alt="shape2"

                        />
                        <h2 className="text-shadow text-[#dc3444] text-4xl leading-[55px] font-semibold mx-auto ">نمونه کارهای ما</h2>
                    </div>
                    <p className="mb-10 mt-3 opacity-80"> !برای الهام‌بخشی و مشاهده مهارت‌ها و خلاقیت ما، حتماً نمونه کارهای ما را ببینید</p>
                </div>
                <div className='flex-col'>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                    >

                        <SwiperSlide>
                            <div className=" opacity-100 transform-3d rounded-lg slider-transition" >
                                <div className="overflow-hidden block relative hover-target ">
                                    <Image src={about3}
                                        alt="about3"
                                        width={500}
                                        height={500}

                                    />
                                </div>
                            </div>
                            {/* <Image src={Home1} className="w-full h-full" /> */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" opacity-100 transform-3d rounded-lg slider-transition" >
                                <div className="overflow-hidden block relative hover-target ">
                                    <Image src={about3}
                                        alt="about3"
                                        width={500}
                                        height={500}

                                    />
                                </div>
                            </div>
                            {/* <Image src={Home1} className="w-full h-full" /> */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" opacity-100 transform-3d rounded-lg slider-transition" >
                                <div className="overflow-hidden block relative hover-target ">
                                    <Image src={about3}
                                        alt="about3"
                                        width={500}
                                        height={500}

                                    />
                                </div>
                            </div>
                            {/* <Image src={Home1} className="w-full h-full" /> */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" opacity-100 transform-3d rounded-lg slider-transition" >
                                <div className="overflow-hidden block relative hover-target ">
                                    <Image src={about3}
                                        alt="about3"
                                        width={500}
                                        height={500}

                                    />
                                </div>
                            </div>
                            {/* <Image src={Home1} className="w-full h-full" /> */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" opacity-100 transform-3d rounded-lg slider-transition" >
                                <div className="overflow-hidden block relative hover-target ">
                                    <Image src={about3}
                                        alt="about3"
                                        width={500}
                                        height={500}

                                    />
                                </div>
                            </div>
                            {/* <Image src={Home1} className="w-full h-full" /> */}
                        </SwiperSlide>

                    </Swiper>
                    <div className='flex flex-row-reverse -mt-14'>
                        <Image src={shape3}
                            alt="shape3"
                       />
                    </div>
                </div>
            </div>
        </>
    );
}
