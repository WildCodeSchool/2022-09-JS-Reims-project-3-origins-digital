import "./VideoPage.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import NavBar from "./NavBar";

export default function VideoPage() {
  const { id } = useParams();
  console.warn(id);

  return (
    <div>
      <Link to="/">
        <FaLessThan />
      </Link>
      <NavBar />
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
        <h2 className="subtitle"> INFORMATIONS</h2>
        <h3 className="informations"> Catégorie :{/* category */}</h3>

        <h2 className="subtitle"> VALIDITE</h2>

        <h2 className="subtitle"> LANGUES</h2>
      </div>
    </div>
  );
}
