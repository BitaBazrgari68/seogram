"use client";
import Image from "next/image";
import Link from 'next/link'
import shape4 from '../../../public/images/shape4.svg'
import shape5 from '../../../public/images/shape5.svg'
import { CgWebsite } from "react-icons/cg";
import { FcAdvertising } from "react-icons/fc";
import { IoPulseOutline } from "react-icons/io5";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

const Services = () => {
    return (
        <div className="pt-20 ">

            <div className=" bg-[#dc3444] p-16 relative " >
                <div className="elementor-shape elementor-shape-top" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z " fill="#FFFFFF"></path>
                    </svg>
                </div>

                <Image src={shape5}
                    alt="shape5"
                    className="absolute bottom-0 left-0"
                />

                <div className="gap-20 justify-between flex-nowrap sm:flex">
                    <div className=" flex-col services-item p-5 rounded-3xl bg-white" data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="600">
                        <div className="bg-[#4E6BFF] text-white mx-auto shrink-0 text-5xl flex justify-center items-center rounded-full shadow-xl border-b border-white w-28 h-28 ">
                            <CgWebsite />
                        </div>
                        <div className="text-right p-5">
                            <h4 className="text-2xl my-3 leading-8  font-medium mb-2.5 text-[#dc3444] text-shadow">طراحی سایت</h4>
                            <p className="opacity-70"> ما به شما وب سایتی مدرن و کاربرپسند ارائه می‌دهیم   </p>
                            <p className="mt-2 text-left">
                                <Link href="#" >ادامه مطلب</Link>
                            </p>

                        </div>
                    </div>
                    <div className=" flex-col gap-2 services-item p-5 rounded-3xl bg-white" data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="700">
                        <div className="bg-[#20CA66] text-white mx-auto shrink-0 text-5xl flex justify-center items-center rounded-full shadow-xl border-b border-white w-28 h-28">
                            <FcAdvertising />
                        </div>
                        <div className="text-right p-5">
                            <h4 className="text-2xl my-3  leading-8  font-medium mb-2.5 text-[#dc3444] text-shadow">تبلیغات</h4>
                            <p className="opacity-70">ایجاد تجربه‌های بی‌نظیر شما با طراحی‌های خلاقانه و جذاب</p>
                            <p className="mt-2 text-left">
                                <Link href="#" >ادامه مطلب</Link>
                            </p>
                        </div>
                    </div>
                    <div className=" flex-col gap-2 services-item p-5 rounded-3xl bg-white" data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="800">
                        <div className="bg-[#cfb50c] text-white mx-auto shrink-0 text-5xl flex justify-center items-center rounded-full shadow-xl border-b border-white w-28 h-28">
                            <IoPulseOutline />
                        </div>
                        <div className="text-right p-5">
                            <h4 className="text-2xl my-3  leading-8  font-medium mb-2.5 text-[#dc3444] text-shadow">سئو</h4>
                            <p className="opacity-70">به شما کمک می‌کند تا در دنیای دیجیتال بیشتر دیده شوید  </p>
                            <p className="mt-2 text-left">
                                <Link href="#" >ادامه مطلب</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Services;
