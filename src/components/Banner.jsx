import React from 'react'

const Banner = ({heading}) => {
  return (
    <section className="bg-aboutBanner bg-cover bg-center h-[315px]">
      <div className="container flex flex-col justify-center h-full">
        <p className="text-[14px] px-[24px] rounded-[10px] bg-white w-fit text-bannerColor leading-[21px] font-semibold">
          Open a digital bank with us today
        </p>
        <h2 className="text-[64px] font-bold leading-[76px] text-white">{heading}</h2>
      </div>
    </section>
  );
}

export default Banner