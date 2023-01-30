import "./VideoCarousel.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../contexts/ContextAuth";

export default function VideoCarousel({ title, videos }) {
  const { auth } = useContext(AuthContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <section className="section-video">
      <h1>{title}</h1>
      <div className="scroll">
        {videos.map((video) => (
          <figure key={video.id}>
            <div className="Link-video">
              {!auth.isAuthenticated && getRandomInt(3) === 0 ? (
                <Link to="/login">
                  <AiFillLock className="lock" alt="lock" />
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
