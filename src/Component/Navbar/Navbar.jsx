import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Foodieland..png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-[1px] border-[#ECECEC]">
      <div className="py-8 flex justify-between items-center container-custom">
        <div className="flex">
          <Link to="/" className="flex">
            <img
              src={logo}
              alt="Logo_img"
              className="img_logo cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <Link
            to="/"
            className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-base font-medium tracking-[-0.02em]"
          >
            Home
          </Link>
          <Link
            to="/Recipes"
            className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-base font-medium tracking-[-0.02em]"
          >
            Recipes
          </Link>
          <Link
            to="/Blog"
            className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-base font-medium tracking-[-0.02em]"
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-base font-medium tracking-[-0.02em]"
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-base font-medium tracking-[-0.02em]"
          >
            About us
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none text-2xl"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden lg:flex gap-5">
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-base hover:text-blue-600 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-base hover:text-blue-400 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-base hover:text-pink-600 transition" />
            </a>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white pb-5">
          <div className="px-4 pt-4 pb-4 space-y-2 flex flex-col items-center">
            <Link
              to="/"
              className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-lg font-medium tracking-[-0.02em]"
            >
              Home
            </Link>
            <Link
              to="/Recipes"
              className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-lg font-medium tracking-[-0.02em]"
            >
              Recipes
            </Link>
            <Link
              to="/Blog"
              className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-lg font-medium tracking-[-0.02em]"
            >
              Blog
            </Link>
            <Link
              to="/Contact"
              className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-lg font-medium tracking-[-0.02em]"
            >
              Contact
            </Link>
            <Link
              to="/About"
              className="font-inter px-[30px] py-3.5 leading-none text-[#000000] text-lg font-medium tracking-[-0.02em]"
            >
              About us
            </Link>
          </div>
          <div className="p-4 flex lg:hidden gap-5 justify-center">
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-base hover:text-blue-600 transition" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-base hover:text-blue-400 transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-base hover:text-pink-600 transition" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
