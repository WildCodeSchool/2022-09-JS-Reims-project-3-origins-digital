import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const VideoContext = createContext();

export default VideoContext;

export function VideoContextProvider({ children }) {
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
    <VideoContext.Provider value={videos}>{children}</VideoContext.Provider>
  );
}
VideoContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
