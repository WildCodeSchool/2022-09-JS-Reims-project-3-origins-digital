import NavBar from "../components/NavBar";

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
        <NavBar />
      </main>
    </>
  );
}
