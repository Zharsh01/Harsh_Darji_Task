import React from "react";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import Insta from "../assets/insta.png";
import InstagramCard from "./InstagramCard";

const InstagramSection = () => {
  const cards = [
    {
      image: food1,
      username: "Foodieland.",
      caption:
        "The vegetables dishes need to have certain vitamin for those people",
      time: "September 19",
    },
    {
      image: food2,
      username: "Foodieland.",
      time: "September 19",
      caption:
        "Sweet food can bring someone into happiness as long as they don’t eat too much",
    },
    {
      image: food3,
      username: "Foodieland.",
      time: "September 19",
      caption:
        "What are you doing before start cooking? prepare the tools or ingredients?",
    },
    {
      image: food4,
      username: "Foodieland.",
      time: "September 19",
      caption:
        "Steak never be wrong, it’s suitable for you who want romantic dinner",
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,_rgba(231,249,253,0)_0%,_#E7F9FD_100%)] py-5 sm:py-10 lg:py-20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-none font-inter font-semibold tracking-[-0.04em] text-center mb-6 text-[#000000]">
          Check out @foodieland on Instagram
        </h2>
        <p className="text-center text-[#00000099] text-base leading-none font-inter mb-10 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-6 md:pt-10 lg:pt-20 gap-6 md:gap-10">
          {cards.map((card, idx) => (
            <InstagramCard key={idx} {...card} />
          ))}
        </div>

        <div className="flex justify-center pt-10 lg:pt-20">
          <button className="flex items-center justify-center text-center gap-4 bg-black text-white px-6 md:px-8 py-5 rounded-2xl text-sm leading-none tracking-[-0.02em]">
            Visit Our Instagram
            <img src={Insta} alt="Insta" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
