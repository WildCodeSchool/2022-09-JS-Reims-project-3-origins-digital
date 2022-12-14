import React from "react";
import PropTypes from "prop-types";
import "./VideoPage.css";

export default function VideoPage({ videotitle, description, category }) {
  return (
    <div>
      <h1 className="titlevideo">{videotitle}</h1>
      <h3 className="description">{description}</h3>

      <h2 className="subtitle"> Informations</h2>
      <h3 className="informations"> Catégorie :{category}</h3>

      <h2 className="subtitle"> Validité</h2>

      <h2 className="subtitle"> Langues</h2>
    </div>
  );
}
VideoPage.propTypes = {
  videotitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
