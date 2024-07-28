import React from 'react'
import ladyphone from "../assets/ladyphone.svg"

export const Build = () => {
  return (
    <section className="bg-buildGradient text-primary pb-[66px]">
      <div className="container grid lg:grid-cols-[60%_40%] items-center">
        <div className='lg:order-2 flex justify-center '>
          <img src={ladyphone} alt="lady" className='lg:w-full' />
        </div>
        <div className='lg:order-1'>
          <div className="flex items-center gap-[22px] pt-[56px]">
            <div className="w-[30px] h-[30px] bg-[#405558]"></div>
            <h5 className="text-[14px] lg:text-lg font-medium leading-[32px] lg:leading-[64px]  ">
              Financial Freedom
            </h5>
          </div>
          <h2 className="text-[28px] lg:text-[56px] font-semibold leading-[64px] pb-[8px] lg:pb-[44px] pl-[12px] pt-[11px]">
            Build with us
          </h2>
          <p className="text-[18px] font-medium leading-[40px] pb-[52px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br /> veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="flex gap-[30px] flex-col md:flex-row">
            <button
              className="bg-btnGradient py-[26px] px-[56px] text-white
          rounded-[10px] w-fit"
            >
              Create an account
            </button>
            <button
              className="py-[26px] px-[56px] text-white
          rounded-[10px] border-[2px] border-white w-fit"
            >
              Open E-Banking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
