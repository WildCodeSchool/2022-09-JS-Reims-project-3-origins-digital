import "./VideoPage.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";

export default function VideoPage() {
  const { id } = useParams();
  console.warn(id);

  return (
    <div>
      <Link to="/">
        <FaLessThan />
      </Link>
      <div className="video-informations">
        <iframe
          width="360"
          height="250"
          src="https://www.youtube.com/embed/mBiE_g074_Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h1 className="titlevideo">{/* title */}</h1>
        <h3 className="description">{/* description */}</h3>
        <h2 className="informations"> INFORMATIONS</h2>
        <h3 className="category"> Catégorie : FootBall</h3>

        <h2 className="validite"> VALIDITE : </h2>
        <h3 className="validateInfosStart">Publié : le 16 décembre 2022</h3>
        <h3 className="validateInfosEnd">Expire : le 16 janvier 2023</h3>
        <h2 className="subtitle"> LANGUES</h2>
        <h3 className="subtitleInfos">French, English, Spanish</h3>
      </div>
    </div>
  );
}
