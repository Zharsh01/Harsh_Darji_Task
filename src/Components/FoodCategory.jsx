import React from "react";
import RecipesCard from "./RecipesCard";
import cuisine1 from "../assets/cuisine1.png";
import cuisine2 from "../assets/cuisine2.png";
import cuisine3 from "../assets/cuisine3.png";
import cuisine4 from "../assets/cuisine4.png";
import cuisine5 from "../assets/cuisine5.png";
import cuisine6 from "../assets/cuisine6.png";
import cuisine7 from "../assets/cuisine7.png";
import cuisine8 from "../assets/cuisine8.png";
import Heart from "../assets/Heart.png";
import Heart2 from "../assets/Heart-blue.png";

const recipes = [
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
    category: "Healthy",
    image: `${cuisine1}`,
    heart: `${Heart}`,
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Western",
    image: `${cuisine2}`,
    heart: `${Heart2}`,
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    category: "Healthy",
    image: `${cuisine3}`,
    heart: `${Heart}`,
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    category: "Eastern",
    image: `${cuisine4}`,
    heart: `${Heart2}`,
  },
  {
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    time: "30 Minutes",
    category: "Healthy",
    image: `${cuisine5}`,
    heart: `${Heart}`,
  },
  {
    title: "Barbeque Spicy Sandwiches with Chips",
    time: "30 Minutes",
    category: "Snack",
    image: `${cuisine6}`,
    heart: `${Heart2}`,
  },
  {
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    time: "30 Minutes",
    category: "Seafood",
    image: `${cuisine7}`,
    heart: `${Heart2}`,
  },
  {
    title: "Chicken Ramen Soup with Mushroom",
    time: "30 Minutes",
    category: "Japanese",
    image: `${cuisine8}`,
    heart: `${Heart}`,
  },
];

const FoodCategory = () => {
  return (
    <section className="py-6 sm:py-10 md:py-20 lg:py-40">
      <div className="container-custom">
        <div className="text-center flex flex-wrap lg:flex-nowrap gap-4 lg:justify-between items-center mb-5 sm:mb-10 lg:mb-20">
          <div className="top-heading w-full lg:max-w-[507px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-none font-inter font-semibold text-[#000000] tracking-[-0.04em]">
              Try this delicious recipe to make your day
            </h2>
          </div>
          <div className="side-heading lg:max-w-[620px]">
            <p className="text-base leading-7 text-[#00000099] font-inter">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
        </div>
        <div className="grid auto-rows-fr gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe, index) => (
            <RecipesCard key={index} {...recipe} noPadding largeTitle />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
