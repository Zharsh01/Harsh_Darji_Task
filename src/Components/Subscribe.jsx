import React from "react";
import RightSalad from "../assets/RightSalad.png";
import LeftVeggies from "../assets/LeftVeggies.png";

const Subscribe = () => {
  return (
    <section className="container-custom">
      <div className="bg-[#E7F9FD] py-12 px-4 md:py-16 lg:py-20 rounded-[60px] relative overflow-hidden">
        <img
          src={LeftVeggies}
          alt="Left veggies"
          className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-56 object-contain"
        />
        <img
          src={RightSalad}
          alt="Salad"
          className="absolute bottom-0 right-0 w-36 md:w-52 lg:w-64 object-contain"
        />

        <div className="max-w-[620px] mx-auto text-center relative z-10">
          <h2 className="font-inter tracking-[-0.04em] text-3xl md:text-4xl lg:text-5xl font-semibold text-[#000000] mb-6">
            Deliciousness to your inbox
          </h2>
          <p className="text-base leading-7 text-[#00000099] font-inter text-center mb-8 md:mb-16">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>

          <form
            className="bg-white rounded-3xl p-[10px] flex items-center w-full max-w-[480px] mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-grow text-[#00000066] font-inter p-3 md:p-5 text-sm leading-none tracking-[-0.02em] rounded-full outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white font-inter text-sm leading-none tracking-[-0.02em] px-8 md:px-11 py-3 md:py-5 rounded-2xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
