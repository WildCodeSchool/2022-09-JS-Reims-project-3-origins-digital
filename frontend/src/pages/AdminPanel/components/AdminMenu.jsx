import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminMenu.css";

export default function AdminMenu() {
  return (
    <div className="admin-menu">
      <Link to="/">
        <p className="back">Retour au site</p>
      </Link>
      <div className="border-header">
        <Link style={{ textDecoration: "none" }} to="/admin">
          <h1 className="title">Admin Panel</h1>
        </Link>
      </div>
      <nav className="border-menu">
        <NavLink
          className="category-menu"
          to="/admin/videos"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Video
        </NavLink>
        <h2 className="border-category2">Utilisateurs</h2>
        <NavLink
          className="category-menu"
          to="/admin/users/members"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Membres
        </NavLink>
        <NavLink
          className="category-menu"
          to="/admin/users/administrators"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Administrateurs
        </NavLink>
        <h2 className="border-category2">Pages</h2>
        <NavLink
          className="category-menu"
          to="/admin/pages/modify"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Modifier
        </NavLink>
        <NavLink
          className="category-menu"
          to="/admin/pages/upload"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Ajouter
        </NavLink>
        <h2 className="border-category2">Sections</h2>
        <NavLink
          className="category-menu"
          to="/admin/sections/modify"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Modifier
        </NavLink>
        <NavLink
          className="category-menu"
          to="/admin/sections/upload"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
            textDecoration: "none",
          })}
        >
          Ajouter
        </NavLink>
      </nav>
    </div>
  );
}
