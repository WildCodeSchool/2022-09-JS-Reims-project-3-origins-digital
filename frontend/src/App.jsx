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
import VideosModify from "./pages/AdminPanel/components/VideosModify";
import VideoList from "./pages/AdminPanel/components/VideoList";
import VideoEditPage from "./pages/AdminPanel/components/VideoEditPage";

function App() {
  return (
    <CategoryContextProvider>
      <VideoContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<SearchBar />} />
            <Route path="/videos/:id" element={<VideoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/videos/modify" element={<VideosModify />} />
            <Route path="/admin/video" element={<VideoList />} />
            <Route path="/admin/videos/:id" element={<VideoEditPage />} />
          </Routes>
        </Router>
      </VideoContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
