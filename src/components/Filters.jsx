import React, { useContext } from "react";
import ResourceContext from "../context/context";

const categories = ["Science", "Math", "Language", "Skills"];
const duration = ["Short", "Medium", "Long"];
const types = ["Video", "Article"];
const Filters = () => {
  const {
    type,
    setType,
    category,
    setCategory,
    sortOrder,
    setSortOrder,
    readTime,
    setReadTime,
  } = useContext(ResourceContext);
  return (
    <div className="md:flex w-full py-5 xxs:grid xxs:grid-cols-2">
      <div className="flex-1 p-4">
        <label className="filter-labels">Type</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="filter-selection"
        >
          <option value="">All</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 p-4">
        <label className="filter-labels">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-selection"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 p-4">
        <label className="filter-labels">Read Time</label>
        <select
          name="category"
          id="category"
          value={readTime}
          onChange={(e) => setReadTime(e.target.value)}
          className="filter-selection"
        >
          <option value="">All</option>
          {duration.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 p-4">
        <label className="filter-labels">Sort by</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="filter-selection"
        >
          <option value="asc">alphabetical A-Z </option>
          <option value="desc">alphabetical Z-A </option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
