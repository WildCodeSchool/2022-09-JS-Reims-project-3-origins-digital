import NavBar from "../components/NavBar";
import ImageCarousel from "../components/ImageCarousel";

import VideosByCategory from "../components/VideosByCategory";

export default function Home() {
  return (
    <div className="Full-page">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ImageCarousel />
        <VideosByCategory />
      </main>
      <footer />
    </div>
  );
}
