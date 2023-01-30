import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
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
          <img
            src={video.thumbnail}
            alt={video.title}
            className="thumbnail_admin"
          />
          <h1 className="video_name">{video.title}</h1>
          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={() => navigate(`./edit/${video.id}`)}
            >
              <AiFillEdit className="edit_button" />
            </button>
            <button className="button" type="button">
              <RiDeleteBin5Line className="delete_button" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
