import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

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
      {toggleMenu === false ? (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <RxHamburgerMenu className="menuIcon" />
        </button>
      ) : (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <RxCross1 className="menuIcon" />
        </button>
      )}
      {(toggleMenu || width > 500) && (
        <ul className="liste">
          <li className="items">ÉQUIPE PREMIÈRE</li>
          <li className="items">FORMATION</li>
          <li className="items">LÉGENDE</li>
          <li className="items">
            <Link style={{ textDecoration: "none" }} to="/admin">
              ADMIN
            </Link>
          </li>
        </ul>
      )}
      <img
        className="logo"
        alt="Origins Digital Logo"
        src="./src/assets/OriginsLogo.png"
      />
      <div className="button-right">
        <Link to="/login">
          <CgProfile className="profile" />
        </Link>
        <Link to="/search">
          <BiSearchAlt className="searchIcon" />
        </Link>
      </div>
    </nav>
  );
}
