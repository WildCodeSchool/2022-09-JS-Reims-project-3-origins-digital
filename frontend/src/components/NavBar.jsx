/* eslint-disable react/button-has-type */
// Pour Romain ou Justine : Si je n'ai pas la ligne pour désactiver le linter, j'ai une erreur eslint qui me dit que le type du bouton doit être défini. Je ne sais pas pourquoi, mais je n'ai pas eu ce problème avec le code de base. Je n'ai pas trouvé de solution pour le moment.
import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

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
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">ÉQUIPE PREMIÈRE</li>
          <li className="items">FORMATION</li>
          <li className="items">LÉGENDE</li>
        </ul>
      )}
      <button onClick={toggleNavSmallScreen} className="btn">
        BTN
      </button>
    </nav>
  );
}
