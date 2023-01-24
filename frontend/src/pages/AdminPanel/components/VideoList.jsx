import React from "react";
import AdminMenu from "./AdminMenu";
import AllVideos from "./AllVideos";
import "./VideoList.css";

export default function VideoList() {
  return (
    <div className="video_list">
      <AdminMenu />
      <div className="carrousel">
        <AllVideos />
      </div>
    </div>
  );
}
