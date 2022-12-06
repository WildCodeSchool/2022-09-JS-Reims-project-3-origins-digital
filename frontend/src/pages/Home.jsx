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
        <h1> Fixtures</h1>
        <p> carousel 1</p>
        <h1> Section 1</h1>
        <p> carousel 2</p>
        <h1> Section 2</h1>
        <p> carousel 3</p>
        <h1> Section 3</h1>
        <p> carousel 4</p>
      </main>
      <footer>footer</footer>
    </>
  );
}
