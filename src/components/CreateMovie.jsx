import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Container from "./Container";
import Button from "./Button";

const initialFormData = {
  title: "",
  director: "",
  abstract: "",
  image: undefined,
};

export default function CreateMovie() {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();

    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    axios
      .post(`${import.meta.env.VITE_API_URL}/movies`, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        navigate("/");
      });
  };

  return (
    <Container>
      <div className="bg-white p-4">
        <h1 className="font-bold">Crea un nuovo film</h1>
        <form className="space-y-2 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="inline-block mb-2" htmlFor="title">
              Titolo
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="title"
              name="title"
              type="text"
              placeholder="Inserisci il titolo del film"
              value={formData.title}
              onChange={(e) => handleField("title", e.target.value)}
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="director">
              Regista
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="director"
              name="director"
              type="text"
              placeholder="Inserisci il nome del regista"
              value={formData.director}
              onChange={(e) => handleField("director", e.target.value)}
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="image">
              Immagine
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              placeholder="Inserisci l'immagine"
              onChange={(e) => handleField("image", e.target.files[0])}
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="abstract">
              Trama
            </label>
            <textarea
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="abstract"
              name="abstract"
              placeholder="Inserisci la trama del film"
              rows={5}
              value={formData.abstract}
              onChange={(e) => handleField("abstract", e.target.value)}
              required
              minLength={5}
            ></textarea>
          </div>
          <Button type="submit">Invia</Button>
        </form>
      </div>
    </Container>
  );
}
