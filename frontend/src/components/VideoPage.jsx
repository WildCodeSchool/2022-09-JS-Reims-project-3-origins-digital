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
        <FaLessThan className="return-button" />
      </Link>
      <div className="video">
        <iframe
          width="428"
          height="250"
          src="https://www.youtube.com/embed/mBiE_g074_Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="video-informations">
          <h1 className="titlevideo">
            Griezmann ATTEND Messi et l’Argentine après le succès contre le
            Maroc !
          </h1>
          <h3 className="description">
            Les Bleus sont en finale de la Coupe du monde après le succès face
            au Maroc, Griezmann promet de tout faire face à Messi, les
            célébrations en mode Matuidi Charo dans le vestiaire : la
            Quotidienne du jour est disponible !
          </h3>
          <div className="hashtag">
            <p className="hash">#Football</p>
            <p className="hash">#Mondial</p>
            <p className="hash">#Griezmann</p>
          </div>
          <hr />
          <h2 className="informations"> INFORMATIONS</h2>
          <h3 className="category"> Catégorie : FootBall</h3>
          <h2 className="validite"> VALIDITE : </h2>
          <h3 className="validateInfosStart">Publié : le 16 décembre 2022</h3>
          <h3 className="validateInfosEnd"> </h3>
          <h2 className="subtitle"> LANGUES</h2>
          <h3 className="subtitleInfos">French, English, Spanish</h3>
        </div>
      </div>
    </div>
  );
}
