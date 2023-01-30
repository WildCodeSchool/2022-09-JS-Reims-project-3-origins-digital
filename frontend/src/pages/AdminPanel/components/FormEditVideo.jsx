import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/ContextAuth";
import "./FormEditVideo.css";

export default function FormEditVideo() {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);

  const [title, setTitle] = useState({ title: "" });
  const [descriptionVideo, setDescriptionVideo] = useState({
    description_video: "",
  });
  const [publicationDate, setPublicationDate] = useState({
    publication_date: "",
  });
  const [link, setLink] = useState({ link: "" });
  const [thumbnail, setThumbnail] = useState({ thumbnail: "" });
  const [categoryId, setCategoryId] = useState({ category_id: "" });
  const [submitionStatus, setSubmitionStatus] = useState("");
  const titleRef = useRef();
  const descriptionVideoRef = useRef();
  const publicationDateRef = useRef();
  const linkRef = useRef();
  const thumbnailRef = useRef();
  const categoryIdRef = useRef();
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date(publicationDate).toLocaleDateString("en-US"));
  }, [publicationDate]);

  useEffect(() => {
    fetch(`http://localhost:5000/videos/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescriptionVideo(data.description_video);
        setPublicationDate(data.publication_date);
        setLink(data.link);
        setThumbnail(data.thumbnail);
        setCategoryId(data.category_id);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const handleSubmit = () => {
    const dataPost = {
      title: titleRef.current.value,
      description_video: descriptionVideoRef.current.value,
      publication_date: publicationDateRef.current.value,
      link: linkRef.current.value,
      thumbnail: thumbnailRef.current.value,
      category_id: categoryIdRef.current.value,
    };

    fetch(`http://localhost:5000/videos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(dataPost),
    })
      .then((res) => {
        setSubmitionStatus("modif");
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="formEdit">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <section className="videoData">
          <div>
            <label htmlFor="title">Titre</label>
            <input
              id="title"
              type="text"
              name="title"
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description_video">Description</label>
            <input
              id="description_video"
              type="text"
              name="description_video"
              ref={descriptionVideoRef}
              value={descriptionVideo}
              onChange={(e) => setDescriptionVideo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="publication_date">Date de publication</label>
            <input
              id="publication_date"
              type="text"
              name="publication_date"
              ref={publicationDateRef}
              value={date}
              onChange={(e) => setPublicationDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="link">Lien de la vidéo</label>
            <input
              id="link"
              type="text"
              name="link"
              ref={linkRef}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="thumbnail">Miniature</label>
            <input
              id="thumbnail"
              type="text"
              name="thumbnail"
              ref={thumbnailRef}
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category_id">Catégorie</label>
            <input
              id="category_id"
              type="text"
              name="category_id"
              ref={categoryIdRef}
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
          </div>
        </section>
        <div className="register_button">
          <input className="submitButton" type="submit" value="Modifier" />
          <p>{submitionStatus}</p>
        </div>
      </form>
    </div>
  );
}
