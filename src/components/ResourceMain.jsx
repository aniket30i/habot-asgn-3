import React, { useState } from "react";
import Filters from "./Filters";

const ResourceMain = () => {
  const [resourceData, setResourceData] = useState([]);

  return (
    <div className="m-8 h-screen bg-yellow-700">
      <Filters />
    </div>
  );
};

export default ResourceMain;
