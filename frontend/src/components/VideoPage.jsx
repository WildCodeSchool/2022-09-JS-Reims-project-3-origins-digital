import "./VideoPage.css";
import React from "react";
import PropTypes from "prop-types";
import { FaLessThan } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VideoPage({ videotitle, description, category }) {
  return (
    <div>
      <Link to="/">
        <FaLessThan />
      </Link>
      <div className="video-informations">
        <h1 className="titlevideo">{videotitle}</h1>
        <h3 className="description">{description}</h3>

        <h2 className="subtitle"> INFORMATIONS</h2>
        <h3 className="informations"> Catégorie :{category}</h3>

        <h2 className="subtitle"> VALIDITE</h2>

        <h2 className="subtitle"> LANGUES</h2>
      </div>
    </div>
  );
}
VideoPage.propTypes = {
  videotitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
