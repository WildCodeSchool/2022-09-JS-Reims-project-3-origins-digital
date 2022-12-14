import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
