import React from 'react'
import { clientBox } from '../constants/data';
import Slidertwo from '../ui/Slidertwo';
import Slider from "../ui/Slider";
import { SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

const Client = () => {
  return (
    <section className="bg-[#FFBB0B80] text-primary pb-[66px]">
      <div className="container">
        <div >
          <div className="flex items-center gap-[22px] pt-[56px]">
            <div className="w-[30px] h-[30px] bg-[#EF9B11]"></div>
            <h5 className="text-[14px] lg:text-lg font-medium leading-[32px] lg:leading-[64px]  ">
              Our Clients speaks
            </h5>
          </div>
          <h2 className="text-[28px] lg:text-[56px] font-semibold leading-[64px] pb-[8px] lg:pb-[44px] pt-[11px] pd-[]">
            What people say
          </h2>
          <div className="hidden lg:flex gap-[31px] justify-center">
            <Slidertwo>
              {clientBox.map((item, index) => (
                <SwiperSlide key={index} className="w-full flex justify-center mb-[16px]">
                  <div
                    key={index}
                    className="shadow-moneyShadow rounded-[10px] bg-white lg:w-[467px] h-[320px]  pl-[66px] pr-[23px] "
                  >
                    <h2 className="font-bold text-[18px] leading-[26px] pt-[27px] ">
                      {item.title}
                    </h2>
                    <p className="font-medium text-[18px] leading-[36px] pt-[30px]">
                      {item.body}
                    </p>
                    <div className="flex absolute bottom-4">
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#C0CCDA] text-[20px]" />
                      <span className="pl-[10px]">(4.6 / 5.0)</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Slidertwo>
          </div>
          <div className="lg:hidden flex gap-1 lg:gap-[31px] justify-center">
            <Slider>
              {clientBox.map((item, index) => (
                <SwiperSlide key={index} className=" mb-[16px]">
                  <div
                    key={index}
                    className="shadow-moneyShadow rounded-[10px] bg-white lg:w-[467px] h-[320px]  pl-[20px] lg:pl-[50px] pr-[20px] "
                  >
                    <h2 className="font-bold text-[18px] leading-[26px] pt-[27px] ">
                      {item.title}
                    </h2>
                    <p className="font-medium text-[16px] leading-[36px] pt-[20px]">
                      {item.body}
                    </p>
                    <div className="flex absolute bottom-4">
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#FFBB0B] text-[20px]" />
                      <FaStar className="text-[#C0CCDA] text-[20px]" />
                      <span className="pl-[10px]">(4.6 / 5.0)</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client