import React from "react";
import chefImg from "../assets/chef.png";
import tomato from "../assets/tomato.png";
import meat from "../assets/meat.png";
import onion from "../assets/onion.png";
import lettuce from "../assets/lettuce.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-5 sm:py-14 lg:py-20">
      <div className="container-custom gap-8 flex justify-between flex-wrap md:flex-nowrap items-center">
        {/* Left Content */}
        <div className="text-center md:max-w-[530px] w-full md:text-left">
          <h2 className="text-inter tracking-[-0.04em] leading-none text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Everyone can be a <br /> chef in their own kitchen
          </h2>
          <p className="text-[#00000099] text-base leading-7 md:max-w-[475px] mb-8 md:mb-[72px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <button className="bg-black text-white text-inter text-sm leading-none tracking-[-0.02em] px-14 py-5 rounded-2xl">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative md:max-w-[710px] w-full flex justify-center">
          <img src={chefImg} alt="Chef" className="w-full relative z-20" />

          <img
            src={tomato}
            alt="Tomato"
            className="absolute z-10 bottom-24 left-16 md:left-32 w-10 lg:w-[50px]"
          />
          <img
            src={meat}
            alt="Meat"
            className="absolute z-10 top-14 left-12 md:left-1/4 -rotate-12 w-10 lg:w-20"
          />
          <img
            src={onion}
            alt="Onion"
            className="absolute z-10 top-16 right-20 md:right-36 w-10 lg:w-[50px]"
          />
          <img
            src={lettuce}
            alt="Lettuce"
            className="absolute z-10 top-1/3 right-4 w-10 lg:w-20"
          />
          <div className="z-0 rounded-[30px] bg-custom-hero absolute right-0 bottom-0 w-full h-full md:max-w-[556px] md:max-h-[651px]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
