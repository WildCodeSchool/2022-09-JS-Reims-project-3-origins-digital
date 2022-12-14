import "./VideoCarousel.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function VideoCarousel({ title, videos }) {
  return (
    <section>
      <h1>{title}</h1>
      <div className="scroll">
        {videos.map((video) => (
          <figure key={video.id}>
            <div>
              <Link to="/video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                />
              </Link>
            </div>
            <figcaption>{video.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
VideoCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};
