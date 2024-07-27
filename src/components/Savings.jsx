import { SwiperSlide } from "swiper/react";
import { savingBox } from "../constants/data";
import Slider from "../ui/Slider";


const Savings = () => {
  return (
    <section className="container pb-[5rem]">
      <div className="flex items-center gap-[7px] lg:gap-[20px] mt-[42px] lg:mt-[119px]">
        <div className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] bg-[#EF9B11]"></div>
        <h5 className="text-[14px] lg:text-lg font-medium leading-[32px] lg:leading-[64px] ">
          Financial Freedom
        </h5>
      </div>
      <h2 className="text-[28px] lg:text-[64px] font-bold leading-[76px] pb-[8px] lg:pb-[28px] ">
        What we do
      </h2>
      <div className="hidden lg:flex gap-[31px] justify-center">
        {savingBox.map((item, index) => (
          <div
            key={index}
            className="shadow-moneyShadow rounded-[10px] bg-white sm:w-[362px] lg:w-[391px] h-[554px] pl-[27px] pt-[69px] pb-[11px] pr-[30px]"
          >
            <img src={item.image} alt={item.title} className="w-full" />
            <h2 className="font-semibold text-[28px] leading-[76px] pt-[18px]">
              {item.title}
            </h2>
            <p className="font-medium text-[18px] leading-[40px]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <Slider>
          {savingBox.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-moneyShadow rounded-[10px] bg-red-400 sm:w-[362px] lg:w-[391px] h-[554px] pl-[27px] pt-[69px] pb-[11px] pr-[30px]">
                <img src={item.image} alt={item.title} className="w-full" />
                <h2 className="font-semibold text-[28px] leading-[76px] pt-[18px]">
                  {item.title}
                </h2>
                <p className="font-medium text-[18px] leading-[40px]">
                  {item.body}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Savings