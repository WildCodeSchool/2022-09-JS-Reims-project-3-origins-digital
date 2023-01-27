import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/ContextAuth";

export default function FormEditVideo() {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    description_video: "",
    publication_date: "",
    link: "",
    thumbnail: "",
    category_id: "",
  });
  const [submitionStatus, setSubmitionStatus] = useState("");
  const url = `${import.meta.env.VITE_BACKEND_URL}/videos/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFormData(data);
    };
    fetchData();
  }, [auth.isAuthenticated]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoi des données modifiées à la base de données pour mise à jour
    fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        description_video: formData.description_video,
        publication_date: formData.publication_date,
        link: formData.link,
        thumbnail: formData.thumbnail,
        category_id: formData.category_id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 204) {
          setSubmitionStatus("Modifications enregistrées !");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour des données", error);
      });
  };
  return (
    <div className="formEdit">
      <form className="form" onSubmit={handleSubmit}>
        <section className="videoData">
          <div>
            <label htmlFor="title">Titre</label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description_video">Description</label>
            <input
              id="description_video"
              type="text"
              name="description_video"
              value={formData.description_video}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="publication_date">Date de publication</label>
            <input
              id="publication_date"
              type="text"
              name="publication_date"
              value={formData.publication_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="link">Lien de la vidéo</label>
            <input
              id="link"
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="thumbnail">Miniature</label>
            <input
              id="thumbnail"
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category_id">Catégorie</label>
            <input
              id="category_id"
              type="text"
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
            />
          </div>
        </section>
        <div className="register_button">
          <button className="submitButton" type="submit">
            Enregistrer les modifications
          </button>
          <p>{submitionStatus}</p>
        </div>
      </form>
    </div>
  );
}
