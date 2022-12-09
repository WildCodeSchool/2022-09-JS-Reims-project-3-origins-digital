import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import NavBar from "../components/NavBar";
import ImageCarousel from "../components/ImageCarousel";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import VideosByCategory from "../components/VideosByCategory";

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
        <NavBar />
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
      </header>
      <main>
        <ImageCarousel />
        <VideosByCategory />
      </main>
      <footer>footer</footer>
    </>
  );
}
