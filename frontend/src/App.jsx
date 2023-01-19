import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPage from "./components/VideoPage";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { VideoContextProvider } from "./contexts/ContextVideos";
import { CategoryContextProvider } from "./contexts/ContextCategory";

function App() {
  return (
    <CategoryContextProvider>
      <VideoContextProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="search" element={<SearchBar />} />
              <Route path="/videos/:id" element={<VideoPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </div>
        </Router>
      </VideoContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
