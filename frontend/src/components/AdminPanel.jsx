import React from "react";
import "./AdminPanel.css";
import { Link } from "react-router-dom";

export default function AdminPanel() {
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
        <p className="category-menu">Modifier</p>
        <p className="category-menu">Ajouter</p>
        <h2 className="border-category2">Utilisateurs</h2>
        <p className="category-menu">Membres</p>
        <p className="category-menu">Administrateurs</p>
        <h2 className="border-category2">Pages</h2>
        <p className="category-menu">Modifier</p>
        <p className="category-menu">Ajouter</p>
        <h2 className="border-category2">Sections</h2>
        <p className="category-menu">Modifier</p>
        <p className="category-menu">Ajouter</p>
      </div>
    </div>
  );
}
