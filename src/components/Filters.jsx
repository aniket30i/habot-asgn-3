import React, { useContext } from "react";
import ResourceContext from "../context/context";

const categories = ["Science", "Math", "Language", "Skills"];

const types = ["Video", "Article"];
const Filters = () => {
  const { type, setType, category, setCategory, sortOrder, setSortOrder } =
    useContext(ResourceContext);
  return (
    <div className="flex w-full py-5">
      <div className="flex-1 p-4">
        <label>Type of Resource</label>
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
        <label>Category of Resources</label>
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
        <label>Sort by</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="filter-selection"
        >
          <option value={sortOrder}>alphabetical A-Z </option>
          <option value={sortOrder}>alphabetical Z-A </option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
