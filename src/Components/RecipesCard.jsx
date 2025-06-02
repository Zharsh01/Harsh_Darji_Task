import React from "react";
import Fork from "../assets/ForkKnife.png";
import Timer from "../assets/Timer.png";

const RecipesCard = ({
  image,
  title,
  heart,
  category,
  time,
  noPadding = false,
  largeTitle = false,
  bgmain = false,
}) => {
  return (
    <div
      className={`${bgmain ? "bg-blue-50" : ""} ${
        noPadding ? "" : "p-4"
      } rounded-xl overflow-hidden`}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full object-cover rounded-2xl"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 h-12 w-12">
          <img src={heart} alt="Heart" className="w-full" />
        </button>
      </div>
      <div className="pt-4">
        <h3
          className={`${
            largeTitle
              ? "text-base md:text-lg leading-none md:leading-6"
              : "text-xl md:text-2xl leading-none md:leading-8"
          }  font-inter tracking-[-0.04em] font-semibold mb-2`}
        >
          {title}
        </h3>
        <div className="text-sm text-gray-600 flex items-center justify-between">
          <div className="flex mt-3 space-x-3">
            <span className="flex items-center gap-2 text-sm leading-none tracking-[-0.02em] rounded-[30px] font-inter font-medium text-[#00000099]">
              <img src={Timer} alt="Timer" />
              {time}
            </span>
            <span className="flex items-center gap-2 text-sm leading-none tracking-[-0.02em] rounded-[30px] font-inter font-medium text-[#00000099]">
              <img src={Fork} alt="Fork" />
              {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
