import { moneyBox } from "../constants/data"

const Money = () => {
  return (
    <section>
      <div className="container flex">
        {moneyBox.map((item) => (
          <div className="shadow-moneyShadow bg-white w-[180px] h-[180px] pl-[18px] pt-[26px]">
            <img src={item.image} alt={item.title} />
            <h3 className="font-semibold text-2xl leading-[64px]">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Money