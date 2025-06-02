import React from "react";
import FavIcon from "../assets/fav-icon.png";
import Shape from "../assets/Shape.png";
import Likes from "../assets/likes--img.png";
import Like from "../assets/Like.png";
import Comment from "../assets/Comment.png";
import Share from "../assets/Messanger.png";
import Pagination from "../assets/Pagination.png";
import Save from "../assets/Save.png";

const InstagramCard = ({ image, username, caption, time }) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src={FavIcon} alt="avatar" className="w-6 h-6 rounded-full" />
          <div className="flex">
            <div>
              <p className="text-[11px] font-inter tracking-[-0.05px] leading-3 text-[#262626] mb-1 flex items-center font-semibold">
                {username}
                <img src={Shape} alt="Shape" />
              </p>
              <p className="text-[8px] leading-none font-inter text-[#262626]">
                Today, Japan
              </p>
            </div>
          </div>
        </div>
        <span className="text-black text-lg">⋯</span>
      </div>

      <img src={image} alt="food" className="w-full h-52 object-cover" />

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <img src={Like} alt="Like" />
            <img src={Comment} alt="Comment" />
            <img src={Share} alt="Share" />
          </div>
          <div>
            <img src={Pagination} alt="Pagination" />
          </div>
          <div>
            <img src={Save} alt="Save" />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <img src={Likes} className="rounded-full w-4" alt="likes" />
          <p className="text-[10px] leading-3 text-[#262626] font-inter tracking-[-0.05px]">
            Liked by <b>craig_love</b> and <b>44,686</b>
          </p>
        </div>
        <p className="text-[11px] font-inter tracking-[-0.05px] leading-3 text-[#262626] mb-2">
          <span className="text-[11px] font-semibold">{username}</span>
          {caption}
        </p>
        <p className="text-[8px] leading-none font-inter text-[#00000066]">
          {time}
        </p>
      </div>
    </div>
  );
};

export default InstagramCard;
