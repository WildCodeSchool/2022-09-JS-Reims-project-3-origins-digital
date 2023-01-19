import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export default CategoryContext;

export function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <CategoryContext.Provider value={category}>
      {children}
    </CategoryContext.Provider>
  );
}
CategoryContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
