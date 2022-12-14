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
