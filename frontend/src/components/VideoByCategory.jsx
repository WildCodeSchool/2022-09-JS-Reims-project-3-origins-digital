import PropTypes from "prop-types";
import VideoCategory from "./VideoCategory";

export default function VideoByCategory({ videos }) {
  const categories = ["Football", "Baseball", "BasketBall"];
  return (
    <>
      {categories.map((category) => (
        <VideoCategory
          title={category}
          videos={videos.filter((video) => video.category === category)}
          key={category}
        />
      ))}
    </>
  );
}
VideoCategory.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
