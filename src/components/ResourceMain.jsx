import React, { useContext, useEffect, useState } from "react";
import Filters from "./Filters";
import ResourceContext from "../context/context";
import Card from "./Card";

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
    <div className="m-8">
      <Filters />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {resourceData.map((resource) => (
            <Card
              id={resource.id}
              title={resource.title}
              isLiked={resource.isLiked}
              readTime={resource.readTime}
              thumbnailUrl={resource.thumbnailUrl}
              type={resource.type}
              category={resource.category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourceMain;
