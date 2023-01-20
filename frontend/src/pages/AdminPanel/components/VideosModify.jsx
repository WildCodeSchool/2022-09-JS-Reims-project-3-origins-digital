import "./VideosModify.css";
import AdminMenu from "./AdminMenu";

export default function VideosModify() {
  return (
    <div className="admin-panel">
      <AdminMenu />
      <div className="admin-content">
        <h1 className="title-vm">Modifier la vidéo</h1>
        <div className="video">
          <div className="video-title">
            <h2 className="title-video">Titre de la vidéo</h2>
            <input
              className="input-title video-input"
              type="text"
              placeholder="Nom de la vidéo"
            />
          </div>
          <div className="video-content">
            <div className="video-description">
              <h2 className="description-title">Description</h2>
              <textarea
                className="description video-input"
                placeholder="Description de la vidéo"
              />
            </div>
            <div className="video-link">
              <h2 className="link-title">Lien</h2>
              <input
                className="link video-input"
                type="text"
                placeholder="Lien de la vidéo"
              />
            </div>
          </div>
        </div>
        <div className="button">
          <button type="button" className="modify-video">
            Enregistrer
          </button>
          <button type="button" className="delete-video">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
