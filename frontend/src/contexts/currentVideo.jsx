import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const CurrentVideoContext = createContext();

export default CurrentVideoContext;

export function CurrentVideoContextProvider({ children }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/videos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <CurrentVideoContext.Provider value={videos}>
      {children}
    </CurrentVideoContext.Provider>
  );
}
CurrentVideoContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
