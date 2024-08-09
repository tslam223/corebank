import { moneyBox }  from "../constants/data"

const Money = () => {
  return (
    <section className="hidden md:block">
      <div className="container flex justify-between gap-[4px] xl:justify-center xl:gap-[33px]">
        {moneyBox.map((item) => (
          <div key={item.title} className="shadow-moneyShadow bg-white w-[180px] h-[171px] pl-[18px] pt-[26px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-[64px] h-[75px]"
            />
            <h3 className="lg:font-semibold lg:text-xl xl:text-2xl lg:leading-[64px]  md:font-medium ">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Money