import { useContext } from "react";
import VideoContext from "../../../contexts/ContextVideos";
import "./AllVideos.css";

export default function VideosByCategory() {
  const videos = useContext(VideoContext);
  return (
    <div className="video_grid">
      {videos.map((video) => (
        <div>
          <img src={video.thumbnail} alt={video.title} className="thumbnail" />
          <h1>{video.title}</h1>
          <button type="button">Editer</button>
          <button type="button">supprimer</button>
        </div>
      ))}
    </div>
  );
}
