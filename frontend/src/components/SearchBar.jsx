import { FaLessThan } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setSearchInput(event.target.value);
    let searchWord = event.target.value.toLocaleLowerCase("fr-FR");
    searchWord = searchWord.normalize("NFD").replace(/\p{Diacritic}/gu, "");

    const newFilter = movies.filter((value) => {
      const normalizeTitle = value.title
        .toLocaleLowerCase("fr-FR")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
      return normalizeTitle.includes(searchWord);
    });

    if (searchWord === "") {
      setFilteredMovies([]);
    } else {
      setFilteredMovies(newFilter);
    }
  }

  useEffect(() => {
    fetch("http://localhost:5000/videos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="SearchBar">
        <Link to="/">
          <FaLessThan className="return_button" />
        </Link>
        <input
          type="search"
          id="site-search"
          placeholder="Rechercher une vidéo"
          onChange={handleChange}
          value={searchInput}
        />
        <button className="searchBtn" type="submit" onSubmit={handleSubmit}>
          Rechercher
        </button>
      </div>
      {filteredMovies.length !== 0 && (
        <div className="results">
          {filteredMovies.map((value) => {
            return (
              <a className="resultItem" href={value.link} key={value.id}>
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
