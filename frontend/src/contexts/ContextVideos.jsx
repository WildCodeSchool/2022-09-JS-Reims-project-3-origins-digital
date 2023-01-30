import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";

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

  const updateVideo = (video) => {
    setVideos(
      videos.map((oldVideo) => (oldVideo.id === video.id ? video : oldVideo))
    );
  };

  const memoizedValue = useMemo(
    () => ({
      videos,
      updateVideo,
    }),
    [videos, updateVideo]
  );

  return (
    <VideoContext.Provider value={memoizedValue}>
      {children}
    </VideoContext.Provider>
  );
}
VideoContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
