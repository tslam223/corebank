import React from "react";
import doted from "../assets/doted.svg"
import gphone from "../assets/guyphone.png"
import guphone from "../assets/guyphone2.png";

const Vision = () => {
  return (
    <section>
      <div className="container pt-[60px] text-primary">
        <div className="flex items-center gap-[7px] lg:gap-[20px]">
          <div className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] bg-yello"></div>
          <h5 className="text-[18px] lg:text-lg font-medium leading-[32px] lg:leading-[64px] ">
            About us
          </h5>
        </div>
        <h2 className="pb-[108px] text-[28px] lg:text-[65px] font-bold leading-[64px]">
          Vision & Mission
        </h2>
        <section className="grid lg:grid-cols-[60%_40%] pb-[154px]">
          <section className="flex gap-[41px] items-start order-2 lg:order-1">
            <div className="flex flex-col items-center ">
              <div className="bg-yello w-[30px] h-[30px] lg:w-[64px] lg:h-[64px] rounded-full flex items-center justify-center text-black font-semibold text-[18px] lg:text-[36px]">
                <span>1</span>
              </div>
              <img src={doted} alt="line" />
              <div className="bg-yello w-[30px] h-[30px] lg:w-[64px] lg:h-[64px] rounded-full flex items-center justify-center text-black font-semibold  text-[18px] lg:text-[36px]">
                <span>2</span>
              </div>
            </div>
            <div className="flex flex-col gap-[70px]">
              <div>
                <h1 className="font-semibold text-[36px] leading-[64px]">
                  Vision
                </h1>
                <p className="text-[18px] font-medium leading-[40px] lg:w-[512px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[36px] leading-[64px]">
                  Mission
                </h1>
                <p className="text-[18px] font-medium leading-[40px] lg:w-[512px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
            </div>
          </section>

          <div className="order-1 lg:order-2">
            <img src={gphone} alt="guyphone" />
          </div>
        </section>
        <section className="grid lg:grid-cols-[40%_60%]">
          <div>
            <img src={guphone} alt="guyphone" />
          </div>
          <section className="flex gap-[41px] items-start">
            <div className="flex flex-col items-center ">
              <div className="bg-yello w-[30px] h-[30px] lg:w-[64px] lg:h-[64px] rounded-full flex items-center justify-center text-black font-semibold text-[18px] lg:text-[36px]">
                <span>3</span>
              </div>
              <img src={doted} alt="line" />
              <div className="bg-yello w-[30px] h-[30px] lg:w-[64px] lg:h-[64px] rounded-full flex items-center justify-center text-black font-semibold text-[18px] lg:text-[36px]">
                <span>4</span>
              </div>
            </div>
            <div className="flex flex-col gap-[70px]">
              <div>
                <h1 className="font-semibold text-[36px] leading-[64px]">
                  Target Markets
                </h1>
                <p className="text-[18px] font-medium leading-[40px] lg:w-[512px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[36px] leading-[64px]">
                  Bill Payments & collection
                </h1>
                <p className="text-[18px] font-medium leading-[40px] lg:w-[512px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Vision;
