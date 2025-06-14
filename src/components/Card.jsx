import React, { useState } from "react";
import liked from "../assets/icons/liked.png";
import unliked from "../assets/icons/unliked.png";

const Card = ({
  id,
  title,
  isLiked,
  readTime,
  thumbnailUrl,
  type,
  category,
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
    <div key={id}>
      <div className=" bg-slate-100 rounded-xl">
        <div>
          <img src={thumbnailUrl} className="h-84 rounded-t-2xl" />
        </div>
        <div className="p-5">
          <label>{category}</label>
          <p className="font-semibold text-xl my-2">{title}</p>
          <div className="mt-10 flex justify-between items-center">
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
