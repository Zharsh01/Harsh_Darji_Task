import React from "react";
import Recipes1 from "../assets/recipes1.png";
import Recipes2 from "../assets/recipes2.png";
import Recipes3 from "../assets/recipes3.png";
import Recipes4 from "../assets/recipes4.png";
import Recipes5 from "../assets/recipes5.png";
import Heart from "../assets/Heart.png";
import Heart2 from "../assets/Heart-blue.png";
import Fork from "../assets/ForkKnife.png";
import Timer from "../assets/Timer.png";

const recipes = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: `${Recipes1}`,
    time: "30 Minutes",
    category: "Snack",
    heart: `${Heart}`,
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: `${Recipes2}`,
    time: "30 Minutes",
    category: "Fish",
    heart: `${Heart2}`,
  },
  {
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: `${Recipes3}`,
    time: "30 Minutes",
    category: "Breakfast",
    heart: `${Heart2}`,
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: `${Recipes4}`,
    time: "30 Minutes",
    category: "Healthy",
    heart: `${Heart}`,
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    image: `${Recipes5}`,
    time: "30 Minutes",
    category: "Meat",
    heart: `${Heart2}`,
  },
];

const Recipes = () => {
  return (
    <div className="max-w-[1340px] px-4 pb-10 md:px-[30px] mx-auto">
      <div className="text-center mb-[100px] md:max-w-[706px] mx-auto">
        <h1 className="text-5xl font-semibold text-inter leading-none tracking-[-0.04em]">
          Simple and tasty recipes
        </h1>
        <p className="text-[#00000099] text-inter text-base leading-none mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-blue-50 p-4 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <button className="absolute top-2 right-2 bg-white rounded-full p-2 w-12">
                <img src={recipe.heart} alt="Heart" className="w-full" />
              </button>
            </div>
            <div className="pt-4">
              <h3 className="text-2xl leading-8 text-inter tracking-[-0.04em] font-semibold mb-2">
                {recipe.title}
              </h3>
              <div className="text-sm text-gray-600 flex items-center justify-between">
                <div className="flex mt-3 space-x-3">
                  <span className="flex items-center gap-2 text-sm leading-none tracking-[-0.02em] rounded-[30px] text-inter font-medium text-[#00000099]">
                    <img src={Timer} alt="Timer" />
                    {recipe.time}
                  </span>
                  <span className="flex items-center gap-2 text-sm leading-none tracking-[-0.02em] rounded-[30px] text-inter font-medium text-[#00000099]">
                    <img src={Fork} alt="Fork" />
                    {recipe.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
