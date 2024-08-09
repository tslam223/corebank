import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const[nav,setNav]=useState(false)
  
  return (
    <>
      <header className="text-base font-semibold relative">
        <div className="container flex justify-between items-center h-[100px]">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="hidden lg:flex items-center justify-between gap-[50px]">
            <li className="flex gap-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About</NavLink>
            </li>
            <li className="flex items-center gap-1">
              Service
              <IoIosArrowDown className="text-[#636366]" />
            </li>
            <li>
              <NavLink to="/savings">Contact Us</NavLink>
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
          <IoMenu
            className="text-[#405558] lg:hidden text-[47px]"
            onClick={() => setNav(true)}
          />
        </div>

        {/* code for mobile nav */}

        <div
          className={
            nav
              ? "bg-white absolute top-0 w-full px-[28px] pt-[21px] pb-[90px] shadow-moneyShadow"
              : "hidden"
          }
        >
          <ul>
            <li onClick={() => setNav(false)}>
              <IoClose className="text-primary text-[25px]" />
            </li>
            <li className="border-b border-b-primary font-medium leading-[20px] text-base my-5 pb-[10px] ">
              <Link>Home</Link>
            </li>
            <li className="border-b border-b-primary font-medium leading-[20px] text-base  my-5 pb-[10px]">
              <Link>About</Link>
            </li>
            <li className="border-b border-b-primary font-medium leading-[20px] text-base  my-5 pb-[10px]">
              <Link>Service</Link>
            </li>
            <li className="border-b border-b-primary font-medium leading-[20px] text-base my-5 pb-[10px]">
              <Link>Blog</Link>
            </li>
            <li className="border-b border-b-primary font-medium leading-[20px] text-base my-5 pb-[10px]">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;