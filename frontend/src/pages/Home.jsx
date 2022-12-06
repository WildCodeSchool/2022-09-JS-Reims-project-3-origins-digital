// eslint-disable-next-line import/no-unresolved
import Carousel from "@components/Carousel";

export default function Home() {
  return (
    <>
      <header className="App-header">
        <img
          className="logo"
          alt="Origins Digital Logo"
          src="./src/assets/OriginsLogo.png"
        />
      </header>
      <main>
        <Carousel />
      </main>
      <footer>footer</footer>
    </>
  );
}
