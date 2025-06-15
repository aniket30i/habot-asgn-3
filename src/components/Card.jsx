import React, { useState } from "react";
import liked from "../assets/icons/liked.png";
import unliked from "../assets/icons/unliked.png";
import forward from "../assets/icons/go.png";

const Card = ({
  id,
  title,
  isLiked,
  readTime,
  thumbnailUrl,
  type,
  category,
  goLink,
}) => {
  const [likes, setLikes] = useState([]);

  const handleLike = (id) => {
    if (likes.includes(id)) {
      setLikes(likes.filter((id) => id !== id));
    } else {
      setLikes([...likes, id]);
    }
  };

  return (
    <div key={id} className="sm:h-[600px] bg-slate-100 rounded-xl">
      <div className=" ">
        <div className="w-full h-[350px] overflow-hidden rounded-t-2xl">
          <img src={thumbnailUrl} className="h-full w-full object-cover" />
        </div>
        <div className="p-5 h-full flex flex-col justify-between">
          <label>{category}</label>
          <p className="font-semibold text-xl my-2 h-36">
            {title}
            <span className="">
              <img
                src={forward}
                alt=""
                className="h-5 hover:bg-amber-300 cursor-pointer rounded-lg"
                onClick={() => window.open(goLink, "_blank")}
              />
            </span>
          </p>
          <div className="flex justify-between items-center">
            <label>{type}</label>
            <p>time : {readTime} mins</p>
            <span onClick={() => handleLike(id)}>
              {isLiked || likes.includes(id) ? (
                <img src={liked} className="h-5 cursor-pointer" />
              ) : (
                <img src={unliked} className="h-5 cursor-pointer" />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
