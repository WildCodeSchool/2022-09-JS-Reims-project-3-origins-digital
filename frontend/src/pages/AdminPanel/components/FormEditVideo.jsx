import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import VideoContext from "../../../contexts/ContextVideos";
import { AuthContext } from "../../../contexts/ContextAuth";

export default function FormEditVideo() {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const { updateVideo } = useContext(VideoContext);

  const [submitionStatus, setSubmitionStatus] = useState("");
  const titleRef = useRef();
  const descriptionVideoRef = useRef();
  const linkRef = useRef();
  const thumbnailRef = useRef();
  const categoryIdRef = useRef();
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/videos/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        titleRef.current.value = data.title;
        descriptionVideoRef.current.value = data.description_video;
        linkRef.current.value = data.link;
        thumbnailRef.current.value = data.thumbnail;
        categoryIdRef.current.value = data.category_id;
        setThumbnail(data.thumbnail);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = () => {
    const dataPost = {
      id: parseInt(id, 10),
      title: titleRef.current.value,
      description_video: descriptionVideoRef.current.value,
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
        updateVideo(dataPost);
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="formEdit">
      <img src={thumbnail} alt={thumbnail} />
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
              className="form-input "
              type="text"
              name="title"
              ref={titleRef}
            />
          </div>
          <div>
            <label htmlFor="description_video">Description</label>
            <input
              id="description_video"
              className="form-input "
              type="text"
              name="description_video"
              ref={descriptionVideoRef}
            />
          </div>
          <div>
            <label htmlFor="link">Lien de la vidéo</label>
            <input
              id="link"
              className="form-input "
              type="text"
              name="link"
              ref={linkRef}
            />
          </div>
          <div>
            <label htmlFor="thumbnail">Miniature</label>
            <input
              id="thumbnail"
              className="form-input "
              type="text"
              name="thumbnail"
              ref={thumbnailRef}
            />
          </div>
          <div>
            <label htmlFor="category_id">Catégorie</label>
            <input
              id="category_id"
              className="form-input "
              type="text"
              name="category_id"
              ref={categoryIdRef}
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
