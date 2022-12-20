import NavBar from "../components/NavBar";
import ImageCarousel from "../components/ImageCarousel";
import "./Home.css";

import VideosByCategory from "../components/VideosByCategory";

export default function Home() {
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
