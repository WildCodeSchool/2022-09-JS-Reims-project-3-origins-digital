import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

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
      setFilteredMovies(movies);
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
    <div className="search-container">
      <NavBar />
      <div className="SearchBar">
        <input
          type="search"
          id="site-search"
          placeholder="Rechercher une vidéo"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      {filteredMovies.length > 0 ? (
        <div className="results">
          {filteredMovies.map((value) => {
            return (
              <div className="SearchValue" key={value.id}>
                <Link to={`/videos/${value.id}`}>
                  <img
                    className="SearchThumbnail"
                    src={value.thumbnail}
                    alt={value.title}
                  />
                </Link>
                <p className="SearchTitle">{value.title}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="results">
          {movies.map((value) => {
            return (
              <div className="SearchValue" key={value.id}>
                <Link to={`/videos/${value.id}`}>
                  <img
                    className="SearchThumbnail"
                    src={value.thumbnail}
                    alt={value.title}
                  />
                </Link>
                <p className="SearchTitle">{value.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
