import "./VideoCarousel.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/ContextAuth";

export default function VideoCarousel({ title, videos }) {
  const { auth } = useContext(AuthContext);

  return (
    <section className="section-video">
      <h1>{title}</h1>
      <div className="scroll">
        {videos.map((video, index) => (
          <figure key={video.id}>
            <div className="Link-video">
              {!auth.isAuthenticated && index % 7 === 4 ? (
                <Link to="/login">
                  <img className="lock" src="/src/assets/lock.png" alt="lock" />
                </Link>
              ) : (
                <Link to={`/videos/${video.id}`}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="thumbnail"
                  />
                </Link>
              )}
            </div>
            <figcaption className="title-video-thumbnail">
              {video.title}
            </figcaption>
          </figure>
        ))}
      </div>
      <hr />
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
