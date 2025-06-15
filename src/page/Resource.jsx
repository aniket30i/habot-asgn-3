import React from "react";
import TitleBar from "../components/TitleBar";
import Hero from "../components/Hero";
import ResourceMain from "../components/ResourceMain";
import Footer from "../components/Footer";

const Resource = () => {
  return (
    <div className="w-full min-h-screen">
      <TitleBar />
      <Hero />
      <ResourceMain />
      <Footer />
    </div>
  );
};

export default Resource;
