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
    <section>
      <div className="container-custom py-10 md:py-16 xl:py-[110px]">
        <div className="flex items-center justify-between">
          <div className="heading">
            <h3 className="font-inter text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.04em] text-[#000000] font-semibold">
              Categories
            </h3>
          </div>
          <div className="categories">
            <button className="rounded-2xl bg-[#E7FAFE] py-[21px] px-[27px] font-inter text-base text-[#000000] leading-none font-semibold tracking-[-0.02em]">
              View All Categories
            </button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 lg:gap-10 text-center">
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
    </section>
  );
};

export default Categories;
