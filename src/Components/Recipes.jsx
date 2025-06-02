import React from "react";
import Recipes1 from "../assets/recipes1.png";
import Recipes2 from "../assets/recipes2.png";
import Recipes3 from "../assets/recipes3.png";
import Recipes4 from "../assets/recipes4.png";
import Recipes5 from "../assets/recipes5.png";
import Recipes7 from "../assets/recipes7.png";
import Recipes8 from "../assets/recipes8.png";
import Recipes9 from "../assets/recipes9.png";
import Ads from "../assets/Ads.png";
import FoodContent from "../assets/food-content.png";
import Heart from "../assets/Heart.png";
import Heart2 from "../assets/Heart-blue.png";
import RecipeCard from "./RecipeCard";
import RecipesCard from "./RecipesCard";

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
  {
    title: "Don’t forget to eat healthy food",
    image: `${Ads}`,
    link: "www.foodieland.com",
    food: `${FoodContent}`,
  },
  {
    title: "Fruity Pancake with Orange & Blueberry",
    image: `${Recipes7}`,
    time: "30 Minutes",
    category: "Sweet",
    heart: `${Heart}`,
  },
  {
    title: "The Best Easy One Pot Chicken and Rice",
    image: `${Recipes8}`,
    time: "30 Minutes",
    category: "Snack",
    heart: `${Heart2}`,
  },
  {
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: `${Recipes9}`,
    time: "30 Minutes",
    category: "Noodles",
    heart: `${Heart2}`,
  },
];

const Recipes = () => {
  return (
    <section className="pb-10">
      <div className="container-custom">
        <div className="text-center mb-10 lg:mb-[100px] md:max-w-[706px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-inter leading-none tracking-[-0.04em]">
            Simple and tasty recipes
          </h2>
          <p className="text-[#00000099] font-inter text-base leading-none mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) =>
            index === 5 ? (
              <RecipeCard key={index} {...recipe} />
            ) : (
              <RecipesCard {...recipe} bgmain />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
