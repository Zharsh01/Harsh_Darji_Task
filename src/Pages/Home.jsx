import React from "react";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Recipes from "../Components/Recipes";
import HeroSection from "../Components/HeroSection";
import InstagramSection from "../Components/InstagramSection";
import FoodCategory from "../Components/FoodCategory";
import Subscribe from "../Components/Subscribe";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Recipes />
      <HeroSection />
      <InstagramSection />
      <FoodCategory />
      <Subscribe />
    </>
  );
};

export default Home;
