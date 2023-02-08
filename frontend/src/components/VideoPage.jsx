import "./VideoPage.css";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import VideoContext from "../contexts/ContextVideos";
import CategoryContext from "../contexts/ContextCategory";
import VideoCarousel from "./VideoCarousel";
import "./VideoCarousel.css";

export default function VideoPage() {
  const { id } = useParams();
  const { videos } = useContext(VideoContext);
  const categories = useContext(CategoryContext);
  const [favorite, setFavorite] = useState(false);
  const handleClick = () => {
    setFavorite(!favorite);
  };
  const video = videos.find(
    (possibleVideo) => possibleVideo.id === parseInt(id, 10)
  );
  const categoryVideo = categories.find(
    (possibleCategory) => possibleCategory.id === video.category_id
  );

  return (
    video && (
      <div>
        <Link to="/">
          <FaLessThan className="return-button" />
        </Link>
        <div className="video_container">
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
              <button type="button" onClick={handleClick}>
                {favorite ? (
                  <FcLike className="favorite" />
                ) : (
                  <FcLikePlaceholder className="favorite" />
                )}
              </button>
              <h3 className="description">{video.description_video}</h3>
              <div className="hashtag">
                <p className="hash">#Football</p>
                <p className="hash">#Mondial</p>
                <p className="hash">#Griezmann</p>
              </div>
              <hr className="barre" />
              <h2 className="informations"> INFORMATIONS</h2>
              <h3 className="category">
                {" "}
                Catégorie : {categoryVideo.category_name}
              </h3>
              <h2 className="validite"> DATE DE PUBLICATION </h2>
              <h3 className="validateInfosStart">
                Publié : {video.publication_date}
              </h3>
              <h3 className="validateInfosEnd"> </h3>
              <h2 className="subtitle"> LANGUES</h2>
              <h3 className="subtitleInfos">French, English, Spanish</h3>
              <hr className="barre" />
            </div>
            <div className="suggest-slider">
              <h1 className="suggest">Vidéos suggérées</h1>
              <VideoCarousel
                title={categoryVideo.category_name}
                videos={videos.filter(
                  (clip) => clip.category_id === categoryVideo.id
                )}
                category={categoryVideo}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
