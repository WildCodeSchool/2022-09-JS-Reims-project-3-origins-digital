import React from "react";
import AdminMenu from "./AdminMenu";
import VideoPage from "../../../components/VideoPage";
import "./VideoList.css";

export default function VideoEditPage() {
  return (
    <div className="video_list">
      <AdminMenu />
      <div className="carrousel">
        <VideoPage />
      </div>
    </div>
  );
}
