import { FaLessThan } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  function handleChange(event) {
    setSearchInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/videos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.warn(data))
      .catch((err) => {
        console.warn(err);
      });
  }

  return (
    <div className="SearchBar">
      <Link to="/">
        <FaLessThan className="return_button" />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="site-search"
          placeholder="Rechercher une vidéo"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
}
