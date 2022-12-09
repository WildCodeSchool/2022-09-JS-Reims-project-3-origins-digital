import "./VideoCategory.css";
import PropTypes from "prop-types";

export default function VideoCategory({ title, videos }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="scroll">
        {videos.map((video) => (
          <figure>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="thumbnail"
              key={video.id}
            />
            <figcaption>{video.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
VideoCategory.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbail: PropTypes.string.isRequired,
    })
  ).isRequired,
};
