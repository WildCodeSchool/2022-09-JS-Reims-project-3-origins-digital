import React, { useContext, useRef, useState } from "react";
import AdminMenu from "@pages/AdminPanel/components/AdminMenu";
import "./UploadVideo.css";
import { AuthContext } from "../../../contexts/ContextAuth";
import VideoContext from "../../../contexts/ContextVideos";

export default function UploadVideo() {
  const { getVideo } = useContext(VideoContext);
  const [create, setCreate] = useState(false);
  const { auth } = useContext(AuthContext);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const publicationDateRef = useRef();
  const linkRef = useRef();
  const thumbnailRef = useRef();
  const categoryIdRef = useRef();

  const handleSubmit = () => {
    const dataPost = {
      title: titleRef.current.value,
      description_video: descriptionRef.current.value,
      publication_date: publicationDateRef.current.value,
      link: linkRef.current.value,
      thumbnail: thumbnailRef.current.value,
      category_id: categoryIdRef.current.value,
    };
    fetch(`http://localhost:5000/videos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(dataPost),
    })
      .then((res) => {
        setCreate(true);
        getVideo();
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="header">
      <AdminMenu />

      <div className="upload_infos">
        <h1>Ajouter une vidéos</h1>
        <form
          className="upload_form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h3>Nom de la vidéo :</h3>
          <input
            ref={titleRef}
            className="upload_input"
            type="title"
            placeholder="Nom"
          />
          <h3>Description :</h3>
          <input
            ref={descriptionRef}
            className="upload_input"
            type="title"
            placeholder="Description"
          />
          <h3>Date de publication :</h3>
          <input
            ref={publicationDateRef}
            className="upload_input"
            type="title"
            placeholder="Date"
          />
          <h3>URL :</h3>
          <input
            ref={linkRef}
            className="upload_input"
            type="title"
            placeholder="Lien vers la vidéo"
          />
          <h3>Miniature :</h3>
          <input
            ref={thumbnailRef}
            className="upload_input"
            type="title"
            placeholder="Lien vers la miniature"
          />
          <select name="categories" ref={categoryIdRef}>
            <option>Categories :</option>
            <option value="1">Football</option>
            <option value="2">Basket</option>
          </select>
          <input className="uploadButton" type="submit" value="Ajouter" />
        </form>
        {create && <p>Votre vidéo a bien été ajouté</p>}
      </div>
    </div>
  );
}
