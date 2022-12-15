import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPage from "./components/VideoPage";
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
          <Route path="/videos/:id" element={<VideoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
