import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AuthContext } from "../contexts/ContextAuth";

const breakpoint = 992;

export default function NavBar() {
  const { auth } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > breakpoint) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    let oldValue = 0;
    let newValue = 0;

    window.addEventListener("scroll", () => {
      // Get the new Value
      newValue = window.scrollY;

      if (oldValue - newValue < 0) {
        setShow(false);
      } else if (oldValue - newValue > 0) {
        setShow(true);
      }

      // Update the old value
      oldValue = newValue;
    });

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav-bar" style={show ? { top: 0 } : { top: -150 }}>
      {toggleMenu === false ? (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <RxHamburgerMenu className="menuIcon" />
        </button>
      ) : (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <RxCross1 className="menuIcon" />
        </button>
      )}
      <img
        className="logo"
        alt="Origins Digital Logo"
        src="./src/assets/OriginsLogo.png"
      />
      {(toggleMenu || width > breakpoint) && (
        <ul className="liste">
          <li className="items">ÉQUIPE PREMIÈRE</li>
          <li className="items">FORMATION</li>
          <li className="items">LÉGENDE</li>
        </ul>
      )}
      {auth.role === "admin" && width > breakpoint && (
        <Link style={{ textDecoration: "none" }} to="/admin">
          ADMIN
        </Link>
      )}
      <div className="button-right">
        {auth.isAuthenticated ? (
          <div>
            <CgProfile className="profile" />
          </div>
        ) : (
          <Link to="/login">
            <CgProfile className="profile" />
          </Link>
        )}

        <Link to="/search">
          <BiSearchAlt className="searchIcon" />
        </Link>
      </div>
    </nav>
  );
}
