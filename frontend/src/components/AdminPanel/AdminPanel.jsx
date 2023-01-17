import { useState } from "react";
import "./AdminPanel.css";
import { Link } from "react-router-dom";
import VideosModify from "./VideosModify";

export default function AdminPanel() {
  const [videosModify, setVideosModify] = useState(false);
  const [videosUpload, setVideosUpload] = useState(false);
  const [userMembers, setUserMembers] = useState(false);
  const [userAdmins, setUserAdmins] = useState(false);
  const [pagesModify, setPagesModify] = useState(false);
  const [pagesUpload, setPagesUpload] = useState(false);
  const [sectionsModify, setSectionsModify] = useState(false);
  const [sectionsUpload, setSectionsUpload] = useState(false);

  return (
    <div>
      <Link to="/">
        <p className="back">Retour au site</p>
      </Link>
      <div className="border-header">
        <h1 className="title">Admin Panel</h1>
      </div>
      <div className="border-menu">
        <h2 className="border-category1">Vidéos</h2>
        <button
          onClick={() => {
            setVideosModify(!videosModify);
          }}
          type="button"
          className="category-menu"
        >
          Modifier
        </button>
        <button
          onClick={() => {
            setVideosUpload(!videosUpload);
          }}
          type="button"
          className="category-menu"
        >
          Ajouter
        </button>
        <h2 className="border-category2">Utilisateurs</h2>
        <button
          onClick={() => {
            setUserMembers(!userMembers);
          }}
          type="button"
          className="category-menu"
        >
          Membres
        </button>
        <button
          onClick={() => {
            setUserAdmins(!userAdmins);
          }}
          type="button"
          className="category-menu"
        >
          Administrateurs
        </button>
        <h2 className="border-category2">Pages</h2>
        <button
          onClick={() => {
            setPagesModify(!pagesModify);
          }}
          type="button"
          className="category-menu"
        >
          Modifier
        </button>
        <button
          onClick={() => {
            setPagesUpload(!pagesUpload);
          }}
          type="button"
          className="category-menu"
        >
          Ajouter
        </button>
        <h2 className="border-category2">Sections</h2>
        <button
          onClick={() => {
            setSectionsModify(!sectionsModify);
          }}
          type="button"
          className="category-menu"
        >
          Modifier
        </button>
        <button
          onClick={() => {
            setSectionsUpload(!sectionsUpload);
          }}
          type="button"
          className="category-menu"
        >
          Ajouter
        </button>
      </div>
      {videosModify && <VideosModify />}
    </div>
  );
}
