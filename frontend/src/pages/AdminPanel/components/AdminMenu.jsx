import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminMenu.css";

export default function AdminMenu() {
  return (
    <div className="admin-menu">
      <Link to="/">
        <img
          src="/src/assets/OriginsLogo.png"
          alt="originslogo"
          className="logo"
        />
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
          <h2 className="border-category2">Vidéos</h2>
        </NavLink>
        <NavLink to="/admin/users">
          <h2 className="border-category2">Utilisateurs</h2>
        </NavLink>
        <h2 className="border-category2">Pages</h2>

        <h2 className="border-category2">Sections</h2>
      </nav>
    </div>
  );
}
