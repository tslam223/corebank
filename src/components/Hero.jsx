import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-heroGuy text-primary h-[260px] sm:h-[320px] md:h-[390px] lg:h-[629px]  bg-cover bg-center">
      <div className="container flex justify-center flex-col h-full">
        <motion.h1
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[24px] sm:text-[40px] lg:text-[64px] font-bold mb-[15px] lg:mb-[34px]"
        >
          Bank at your <br /> finger tip
        </motion.h1>
        <motion.p initial={{y:100}} whileInView={{y:0}} transition={{duration: 1}} className="text-[12px] font-medium lg:font-semibold lg:text-[18px] md:w-[480px] leading-5 lg:leading-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
