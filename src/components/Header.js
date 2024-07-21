import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="text-base font-semibold">
        <div className="container flex justify-between items-center h-[100px]">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className="hidden lg:flex items-center justify-between gap-[50px]">
            <li className="flex gap-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="flex items-center gap-1">
              Service
              <IoIosArrowDown className="text-[#636366]" />
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center justify-between gap-[50px]">
            <li>
              <NavLink to="/get">Get Started</NavLink>
            </li>
            <li className="bg-btnGradient py-[10px] px-[34px] text-white rounded-[10px]">
              <NavLink to="/app">Get App</NavLink>
            </li>
          </ul>
          <IoMenu className="text-[#405558] lg:hidden text-[47px]" />
        </div>
      </header>
    </>
  );
};

export default Header;