import { Link } from "react-router-dom";
import appstore from "../assets/appstore.svg"
import googleplay from "../assets/googleplay.svg"
import iphone from "../assets/iphone.svg"

const Phone = () => {
  return (
    <section className="bg-bgApp bg-cover bg-center lg:mb-[72px] pb-[88px] lg:pb-0">
      <div className="container ">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-[115px] lg:pt-[88px] gap-10">
          <div className="">
            <img src={iphone} alt="iphone" />
          </div>
          <div className="">
            <div>
              <h5 className="text-[12px] font-[900] leading-[50px] text-[#EAB221]">
                MOBILE APP
              </h5>
              <h2 className="text-[#2F2F2F] text-[18px] lg:text-[48px] font-semibold lg:leading-[62px]">
                Download Our App
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-[20px] pt-[40px] ">
              <Link to="/">
                <img src={appstore} alt="appstore" />
              </Link>
              <Link to="/">
                <img src={googleplay} alt="googleplay" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phone