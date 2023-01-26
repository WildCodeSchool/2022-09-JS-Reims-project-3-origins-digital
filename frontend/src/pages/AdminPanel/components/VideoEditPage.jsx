import React from "react";
import AdminMenu from "./AdminMenu";
import FormEditVideo from "./FormEditVideo";
import "./VideoEditPage.css";

export default function VideoEditPage() {
  return (
    <div className="container">
      <div className="video_list">
        <AdminMenu />
      </div>
      <FormEditVideo />
    </div>
  );
}
