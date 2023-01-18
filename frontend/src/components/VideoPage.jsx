import "./VideoPage.css";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import VideoContext from "../contexts/ContextVideos";

export default function VideoPage() {
  const { id } = useParams();
  const videos = useContext(VideoContext);
  const video = videos.find(
    (possibleVideo) => possibleVideo.id === parseInt(id, 10)
  );

  return (
    video && (
      <div>
        <Link to="/">
          <FaLessThan className="return-button" />
        </Link>
        <div className="video">
          <div className="video-player">
            <iframe
              className="responsive-video"
              src={video.link}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video-informations">
            <h1 className="titlevideo">{video.title}</h1>
            <h3 className="description">{video.description_video}</h3>
            <div className="hashtag">
              <p className="hash">#Football</p>
              <p className="hash">#Mondial</p>
              <p className="hash">#Griezmann</p>
            </div>
            <hr className="barre" />
            <h2 className="informations"> INFORMATIONS</h2>
            <h3 className="category">catégorie</h3>
            <h2 className="validite"> VALIDITE : </h2>
            <h3 className="validateInfosStart">
              Publié : {video.publication_date}
            </h3>
            <h3 className="validateInfosEnd"> </h3>
            <h2 className="subtitle"> LANGUES</h2>
            <h3 className="subtitleInfos">French, English, Spanish</h3>
          </div>
        </div>
      </div>
    )
  );
}
