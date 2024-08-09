import React from 'react'
import logo from "../assets/logo.svg";
import orangeplay from "../assets/orangeplay.svg";
import appstore from "../assets/appstoretwo.svg";
import { List, ListItem, } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



 const Footer = () => {
  return (
    <footer className="bg-[#12082D]">
      <div className="container">
        <div className="grid lg:flex pb-[76px] justify-between ">
          <div className="pt-[29px] ">
            <img src={logo} alt="logo" />
            <h5 className="font-semibold text-[18px] leading-[30px] pb-[40px] pt-[40px] text-white">
              Excepteur sint occaecat cupidatat non <br /> proident, sunt in culpa qui
              officia <br /> deserunt mollit anim id est laborum."
            </h5>
            <div className="grid gap-[23px]">
              <img src={orangeplay} alt="play" />
              <img src={appstore} alt="appstore" />
            </div>
          </div>
          <div className="flex pt-[60px] flex-col lg:flex-row">
            <List className="text-white font-medium text-[20px] leading-[30px] ">
              <ListItem className="font-bold text-[28px] leading-[30px] text-[#EF9B11] mb-[40px] ">
                Quick Links
              </ListItem>
              <ListItem>E-Banking</ListItem>
              <ListItem>Investment</ListItem>
              <ListItem>Coreflex</ListItem>
              <ListItem>Corethrift</ListItem>
              <ListItem>Loans</ListItem>
              <ListItem>Savings</ListItem>
            </List>
            <List className="text-white font-medium text-[20px] leading-[30px] ">
              <ListItem className="font-bold text-[28px] leading-[30px] text-[#EF9B11] mb-[40px]">
                Company
              </ListItem>
              <ListItem>About Us </ListItem>
              <ListItem>Policy’s</ListItem>
              <ListItem>Contact us</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Blog</ListItem>
            </List>
            <List className="text-white font-medium text-[20px] leading-[30px] ">
              <ListItem className="font-bold text-[28px] leading-[30px] text-[#EF9B11] mb-[40px]">
                Contact
              </ListItem>
              <ListItem>22/24 Ago Palace Way <br /> Okota Isolo Lagos</ListItem>
              <ListItem>
                +234 915 555 6905 <br /> +234 915 555 6906 <br />
                +234 913 883 1511
              </ListItem>
              <ListItem>customercare@corestepmfb.com</ListItem>
              <ListItem className="text-[#EF9B11] gap-[12px] text-[30px]">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;