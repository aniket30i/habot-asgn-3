import React from "react";

const Card = ({
  id,
  title,
  isLiked,
  readTime,
  thumbnailUrl,
  type,
  category,
}) => {
  console.log("liked status:", isLiked);
  return (
    <div key={id}>
      <div className=" bg-slate-100 rounded-xl">
        <div>
          <img src={thumbnailUrl} className="h-84 rounded-t-2xl" />
        </div>
        <div className="p-5">
          <label>{category}</label>
          <p className="font-semibold text-xl my-2">{title}</p>
          <div className="mt-10 flex justify-between">
            <label>{type}</label>
            <p>time : {readTime} mins</p>
            <p>{isLiked}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
