
import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import "./Home.css";
import SearchBar from "../components/SearchBar";

export default function Home() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/videos`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.warn(videos);

  const [search, setSearch] = useState(false);
  return (
    <>
      <header className="App-header">
        <img
          className="logo"
          alt="Origins Digital Logo"
          src="./src/assets/OriginsLogo.png"
        />
        <NavBar />
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
      </header>
      <main>
        <h1> Fixtures</h1>
        <p> carousel 1</p>
        <h1> Section 1</h1>
        <p> carousel 2</p>
        <h1> Section 2</h1>
        <p> carousel 3</p>
        <h1> Section 3</h1>
        <p> carousel 4</p>
        <Carousel />
      </main>
      <footer>footer</footer>
    </>
  );
}
