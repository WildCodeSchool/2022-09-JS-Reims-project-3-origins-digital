import "./VideosModify.css";
import AdminMenu from "./AdminMenu";

export default function VideosModify() {
  return (
    <div className="admin-panel">
      <AdminMenu />
      <div className="admin-content">
        <h1 className="title-vm">Modifier les vidéos</h1>
        <div className="videos">
          <div className="video">
            <div className="video-title">
              <h2 className="title-video">Titre de la vidéo</h2>
              <button type="button" className="delete-video">
                Supprimer
              </button>
            </div>
            <div className="video-content">
              <div className="video-description">
                <h3 className="description-title">Description</h3>
                <textarea
                  className="description"
                  placeholder="Description de la vidéo"
                />
              </div>
              <div className="video-link">
                <h3 className="link-title">Lien</h3>
                <input
                  className="link"
                  type="text"
                  placeholder="Lien de la vidéo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
