import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [lenght, setLenght] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLenght(window.innerWidth);

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
    <nav>
      {(toggleMenu || lenght > 500) && (
        <ul className="liste">
          <li className="items">ÉQUIPE PREMIÈRE</li>
          <li className="items">FORMATION</li>
          <li className="items">LÉGENDE</li>
        </ul>
      )}
      <button type="button" onClick={toggleNavSmallScreen} className="btn">
        BTN
      </button>
    </nav>
  );
}
