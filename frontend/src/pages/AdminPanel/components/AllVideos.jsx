import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import VideoContext from "../../../contexts/ContextVideos";
import "./AllVideos.css";

export default function VideosByCategory() {
  const navigate = useNavigate();
  const videos = useContext(VideoContext);

  return (
    <div className="video_grid">
      {videos.map((video) => (
        <div className="video_tile">
          <img src={video.thumbnail} alt={video.title} className="thumbnail" />
          <h1 className="video_name">{video.title}</h1>
          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={() => navigate(`/admin/videos/${video.id}`)}
            >
              Modifier
            </button>
            <button className="button" type="button">
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
