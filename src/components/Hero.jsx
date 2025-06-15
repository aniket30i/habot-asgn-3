import React from "react";

const Hero = () => {
  return (
    <div className="text-slate-800 flex flex-col justify-center items-center pt-12">
      <h1 className="xxs:text-xl sm:text-3xl md:text-5xl lg:text-6xl ">
        Materials you can put to work
      </h1>
      <p className="p-10 text-center xxs:text-xs sm:text-md lg:text-lg ">
        From science experiments to grammar guides, discover resources that turn
        screen time into learning time. <br />
        Curated for parents who want more than just content—they want impact.
      </p>
    </div>
  );
};

export default Hero;
