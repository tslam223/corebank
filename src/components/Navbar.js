import line from "../assets/line.svg";
import { FaLock } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="bg-[#40555899] text-white text-base font-medium">
      <div className="container flex items-center justify-between h-[100px]">
        <ul className="flex gap-[21px] items-center">
          <li className="flex items-center gap-1">
            <FaLock className="text-[#EF9B11]" />
            <a href="/">Open An Account</a>
          </li>
          <li className="lg:flex items-center gap-1 hidden">
            <FaLock className="text-[#86713C]" />
            <a href="/">E-Banking</a>
          </li>
          <li className="hidden lg:flex">
            <img src={line} alt="line" />
          </li>
          <li className="hidden lg:flex">
            <a href="/">Help Center</a>
          </li>
        </ul>
        <ul className=" flex gap-[21px] items-center">
          <li className="hidden lg:flex">+234 913 883 1511</li>
          <li className="hidden lg:flex">
            <img src={line} alt="line" />
          </li>
          <li>
            <a href="/">Find Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
