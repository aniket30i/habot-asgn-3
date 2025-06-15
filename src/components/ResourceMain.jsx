import React, { useContext, useEffect, useState } from "react";
import Filters from "./Filters";
import ResourceContext from "../context/context";
import Card from "./Card";

const ResourceMain = () => {
  const [resourceData, setResourceData] = useState([]);
  const { type, category, readTime, sortOrder } = useContext(ResourceContext);

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
        setTimeout(() => setLoading(false), 3000);
      }
    };

    fetchData();
  }, []);

  const filtered = resourceData.filter((resource) => {
    const typeMatch = type === "" || resource.type === type;
    const categoryMatch = category === "" || resource.category === category;
    const readingTimeMatch =
      readTime === "" ||
      (resource.readTime <= 5 && readTime === "Short") ||
      (resource.readTime >= 10 && readTime === "Long") ||
      (resource.readTime >= 5 &&
        resource.readTime <= 10 &&
        readTime === "Medium");
    return typeMatch && categoryMatch && readingTimeMatch;
  });

  const sortedArr = [...filtered].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "desc") {
      return b.title.localeCompare(a.title);
    }
  });

  console.log(sortOrder, sortedArr);

  return (
    <div className="m-8">
      <Filters />
      {loading ? (
        <div className="flex justify-center h-96 w-full items-center">
          <p>Fetching Resources...</p>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-3 xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {sortedArr.map((resource) => (
            <Card
              id={resource.id}
              title={resource.title}
              isLiked={resource.isLiked}
              readTime={resource.readTime}
              thumbnailUrl={resource.thumbnailUrl}
              type={resource.type}
              category={resource.category}
              goLink={resource.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourceMain;
