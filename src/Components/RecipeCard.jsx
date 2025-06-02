import React from "react";
import { Link } from "react-router-dom";
import Ads from "../assets/Ads.png";
import FoodContent from "../assets/food-content.png";
const RecipeCard = ({ title, link }) => {
  return (
    <div>
      <div
        className="bg bg-cover bg-center pt-10 relative"
        style={{ backgroundImage: `url(${Ads})` }}
      >
        <div className="font-lobster">
          <h4 className="text-2xl leading-none text-white text-center lg:max-w-[172px] mx-auto">
            {title}
          </h4>
          <div>
            <img className="mx-auto" src={FoodContent} alt="FoodContent" />
          </div>
          <div className="absolute bottom-8 w-full text-center">
            <Link
              href="/"
              className="text-inter text-white text-sm leading-none tracking-[-0.02em] font-medium"
            >
              {link}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
