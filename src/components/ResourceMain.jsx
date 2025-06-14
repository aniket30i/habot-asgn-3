import React, { useContext, useEffect, useState } from "react";
import Filters from "./Filters";
import ResourceContext from "../context/context";

const ResourceMain = () => {
  const [resourceData, setResourceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { type, category, sortOrder } = useContext(ResourceContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:3006/resources");
        const data = await response.json();

        if (response.ok) {
          setResourceData(data);
        } else {
          throw new Error("Failed to fetch resources.");
        }
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setTimeout(() => setLoading(false), 3000); // Simulated delay
      }
    };

    fetchData();
  }, []);

  console.log(resourceData);

  return (
    <div className="m-8 h-screen bg-yellow-700">
      <Filters />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {resourceData.map((resource) => (
            <div key={resource.id}>
              <h2>{resource.title}</h2>
              <p>{resource.category}</p>
              <p>{resource.type}</p>
              <p>{resource.readTime}</p>
              <p>{resource.link}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourceMain;
