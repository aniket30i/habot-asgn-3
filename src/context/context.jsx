import { createContext, useState } from "react";

const ResourceContext = createContext();

export default ResourceContext;

export const ResourceProvider = ({ children }) => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [readTime, setReadTime] = useState("");

  return (
    <ResourceContext.Provider
      value={{
        type,
        setType,
        category,
        setCategory,
        sortOrder,
        setSortOrder,
        readTime,
        setReadTime,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};
