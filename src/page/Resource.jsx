import React from "react";
import TitleBar from "../components/TitleBar";
import Hero from "../components/Hero";
import ResourceMain from "../components/ResourceMain";

const Resource = () => {
  return (
    <div className="w-full h-screen">
      <TitleBar />
      <Hero />
      <ResourceMain />
    </div>
  );
};

export default Resource;
