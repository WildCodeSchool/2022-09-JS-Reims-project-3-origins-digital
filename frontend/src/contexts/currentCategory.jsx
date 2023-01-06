import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const CurrentCategoryContext = createContext();

export default CurrentCategoryContext;

export function CurrentCategoryContextProvider({ children }) {
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
    <CurrentCategoryContext.Provider value={category}>
      {children}
    </CurrentCategoryContext.Provider>
  );
}
CurrentCategoryContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
