import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Food from "../assets/food_img.png";
import Fork from "../assets/ForkKnife.png";
import Timer from "../assets/Timer.png";
import John from "../assets/john.png";
import Book from "../assets/book.png";
import Play from "../assets/PlayCircle.png";
const recipes = [
  {
    title: "Spicy delicious chicken wings",
    time: "30 Minutes",
    category: "Chicken",
    date: "18 March 2022",
    author: "John Smith",
    image: `${Food}`,
  },
  {
    title: "Spicy delicious chicken wings",
    time: "30 Minutes",
    category: "Chicken",
    date: "18 March 2022",
    author: "John Smith",
    image: `${Food}`,
  },
  {
    title: "Spicy delicious chicken wings",
    time: "30 Minutes",
    category: "Chicken",
    date: "18 March 2022",
    author: "John Smith",
    image: `${Food}`,
  },
];

const Slider = () => {
  return (
    <>
      <div className="py-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          navigation
        >
          {recipes.map((recipe, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-y-5 lg:gap-0 lg:flex-row items-center bg-blue-50 rounded-3xl">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 ps-[7%] p-6 space-y-4">
                  <button className="shadow-custom flex items-center gap-2 bg-white text-black text-sm leading-none text-inter tracking-[-0.02em] font-semibold px-5 py-[11px] rounded-[30px]">
                    <img src={Book} alt="Book" className="w-6" />
                    Hot Recipes
                  </button>
                  <h2 className="font-inter text-4xl lg:text-[40px] xl:text-[64px] leading-none tracking-[-0.04em] font-semibold m-0 pt-4">
                    {recipe.title}
                  </h2>
                  <p className="text-inter py-4 text-base leading-7 text-[#00000099]">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut
                    enim ad minim
                  </p>
                  <div className="flex space-x-3">
                    <span className="flex items-center gap-2 bg-[#0000000D] px-4 py-2 text-sm leading-none tracking-[-0.02em] rounded-[30px] text-inter font-medium text-[#00000099]">
                      <img src={Timer} alt="Timer" />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-2 bg-[#0000000D] px-4 py-2 text-sm leading-none tracking-[-0.02em] rounded-[30px] text-inter font-medium text-[#00000099]">
                      <img src={Fork} alt="Fork" />
                      {recipe.category}
                    </span>
                  </div>
                  <div className="flex pt-7 xl:pt-24 items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src={John}
                        alt="John"
                      />
                      <div>
                        <p className="text-inter text-base leading-none tracking-[-0.02em] text-[#000000] mb-2 font-bold">
                          {recipe.author}
                        </p>
                        <p className="text-inter text-sm leading-none tracking-[-0.02em] text-[#00000099] font-medium">
                          {recipe.date}
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 bg-black text-white px-9 py-4 text-inter text-sm leading-none tracking-[-0.02em] rounded-[16px]">
                      View Recipes
                      <img src={Play} alt="PlayCircle" />
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="rounded-3xl w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
