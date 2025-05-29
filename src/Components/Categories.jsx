import React from "react";
import Rice from "../assets/rice.png";
import Cake from "../assets/cake.png";
import Chocolate from "../assets/chocolate.png";
import Lunch from "../assets/lunch.png";
import Meat from "../assets/meat.png";
import Vegan from "../assets/vegan.png";

const categories = [
  {
    name: "Breakfast",
    image: `${Rice}`,
    bgColor: "bg-custom-gradient1",
  },
  {
    name: "Vegan",
    image: `${Vegan}`,
    bgColor: "bg-custom-gradient2",
  },
  {
    name: "Meat",
    image: `${Meat}`,
    bgColor: "bg-custom-gradient3",
  },
  {
    name: "Dessert",
    image: `${Cake}`,
    bgColor: "bg-custom-gradient4",
  },
  {
    name: "Lunch",
    image: `${Lunch}`,
    bgColor: "bg-custom-gradient5",
  },
  {
    name: "Chocolate",
    image: `${Chocolate}`,
    bgColor: "bg-custom-gradient5",
  },
];

const Categories = () => {
  return (
    <div>
      <div className="max-w-[1340px] mx-auto py-10 lg:py-[110px] px-4 md:px-[30px]">
        <div className="flex justify-between">
          <div className="heading">
            <h3 className="text-inter text-5xl leading-none tracking-[-0.04em] text-[#000000] font-semibold">
              Categories
            </h3>
          </div>
          <div className="categories">
            <button className="rounded-2xl bg-[#E7FAFE] py-[21px] px-[27px] text-inter text-base text-[#000000] leading-none font-semibold tracking-[-0.02em]">
              View All Categories
            </button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 text-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 rounded-xl shadow-sm transition hover:shadow-md ${cat.bgColor}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-[100px] object-contain mb-5 lg:mb-[50px]"
              />
              <p className="text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
