import React from "react";
import Logo from "../../assets/Foodieland..png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-4 md:pb-12 pt-6 sm:pt-10 md:pt-20 lg:pt-40">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="w-full md:max-w-[400px]">
            <img src={Logo} alt="Foodieland" />
            <p className="text-sm md:text-base leading-7 font-inter text-[#00000099] mt-4">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>

          <div className="flex space-x-5 md:space-x-14 text-base leading-none font-inter font-medium tracking-[-0.02em] text-[#000000]">
            <Link href="#">Recipes</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
            <Link href="#">About us</Link>
          </div>
        </div>

        <div className="mt-12 border-t border-[#0000001A] pt-0 md:pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div></div>
          <p className="text-lg leading-none tracking-[-0.02em] font-normal font-inter text-[#00000099] text-center md:text-left w-full md:w-auto order-2 md:order-1">
            © 2020 Flowbase. Powered by
            <span className="text-red-500"> Webflow</span>
          </p>
          <div className="flex space-x-10 mt-4 md:mt-0 order-1 md:order-2">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
