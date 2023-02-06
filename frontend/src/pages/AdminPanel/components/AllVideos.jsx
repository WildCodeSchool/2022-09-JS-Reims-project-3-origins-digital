import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/ContextAuth";
import VideoContext from "../../../contexts/ContextVideos";
import "./AllVideos.css";

export default function VideosByCategory() {
  const navigate = useNavigate();
  const { videos } = useContext(VideoContext);
  const { auth } = useContext(AuthContext);
  const deleteVideo = (video) => {
    const { id } = video;
    fetch(`http://localhost:5000/videos/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((res) => {
        if (res.status === 204) {
          alert("Votre Vidéo a bien été supprimée");
        }
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="video_grid">
      <div className="upload">
        <button
          className="upload_button"
          type="button"
          onClick={() => navigate(`/admin/videos/upload`)}
        >
          Ajouter une vidéo
        </button>
      </div>
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
              onClick={() => navigate(`./${video.id}`)}
            >
              <AiFillEdit className="edit_button" />
            </button>
            <button
              className="button"
              type="button"
              onClick={() => {
                deleteVideo(video);
              }}
            >
              <RiDeleteBin5Line className="delete_button" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
