import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import ImageCarousel from "../components/ImageCarousel";
import "./Home.css";

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

  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ImageCarousel />
        <VideosByCategory />
      </main>
      <footer>footer</footer>
    </>
  );
}
