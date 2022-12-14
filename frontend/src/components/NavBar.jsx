import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SearchBar from "./SearchBar";
import "./NavBar.css";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState(false);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <button type="button" onClick={toggleNavSmallScreen} className="btn">
        Menu
      </button>
      {(toggleMenu || width > 500) && (
        <ul className="liste">
          <li className="items">ÉQUIPE PREMIÈRE</li>
          <li className="items">FORMATION</li>
          <li className="items">LÉGENDE</li>
        </ul>
      )}
      <img
        className="logo"
        alt="Origins Digital Logo"
        src="./src/assets/OriginsLogo.png"
      />
      {search === false && (
        <button
          type="submit"
          className="search"
          onClick={() => setSearch(!search)}
        >
          <BiSearchAlt className="searchIcon" />
        </button>
      )}
      {search === true && <SearchBar />}
    </nav>
  );
}
