import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import VideoByCategory from "../components/VideoByCategory";
import videos from "./Videos";

export default function Home() {
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
        <Carousel />
        <VideoByCategory videos={videos} />
      </main>
      <footer>footer</footer>
    </>
  );
}
