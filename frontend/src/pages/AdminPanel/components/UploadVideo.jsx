import React from "react";
import AdminMenu from "@pages/AdminPanel/components/AdminMenu";
import "./UploadVideo.css";

function UploadVideo() {
  return (
    <div className="header">
      <AdminMenu />

      <div className="upload_infos">
        <h1>Ajouter une vidéos</h1>
        <form className="upload_form">
          <h3>Nom de la vidéo :</h3>
          <input className="upload_input" type="title" placeholder="Nom" />
          <h3>Description :</h3>
          <input
            className="upload_input"
            type="title"
            placeholder="Description"
          />
          <h3>URL :</h3>
          <input
            className="upload_input"
            type="title"
            placeholder="Lien vers la vidéo"
          />
          <h3>Miniature :</h3>
          <input
            className="upload_input"
            type="title"
            placeholder="Lien vers la vidéo"
          />
        </form>
      </div>
    </div>
  );
}

export default UploadVideo;
