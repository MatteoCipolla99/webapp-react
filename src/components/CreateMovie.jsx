import axios from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Container from "./Container";
import Button from "./Button";

const initialFormData = {
  title: "",
  director: "",
  abstract: "",
  genre: "Non specificato", // Aggiunto campo genre
  release_year: new Date().getFullYear().toString(), // Aggiunto release_year
  image: undefined,
};

export default function CreateMovie() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
    setError("");
    setLoading(true);

    // Validazione
    if (
      !formData.title ||
      !formData.director ||
      !formData.abstract ||
      !formData.image
    ) {
      setError("Compila tutti i campi obbligatori");
      setLoading(false);
      return;
    }

    const dataToSend = new FormData();

    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    axios
      .post("/movies", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Film inserito con successo:", response.data);
        setFormData(initialFormData);
        navigate("/");
      })
      .catch((err) => {
        console.error("Errore durante l'inserimento:", err);
        setError(
          err.response?.data?.message || "Errore durante l'inserimento del film"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <div className="bg-white p-4">
        <h1 className="font-bold">Crea un nuovo film</h1>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <form className="space-y-2 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="inline-block mb-2" htmlFor="title">
              Titolo *
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="title"
              name="title"
              type="text"
              placeholder="Inserisci il titolo del film"
              value={formData.title}
              onChange={(e) => handleField("title", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="director">
              Regista *
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="director"
              name="director"
              type="text"
              placeholder="Inserisci il nome del regista"
              value={formData.director}
              onChange={(e) => handleField("director", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="genre">
              Genere
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="genre"
              name="genre"
              type="text"
              placeholder="Inserisci il genere del film"
              value={formData.genre}
              onChange={(e) => handleField("genre", e.target.value)}
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="release_year">
              Anno di uscita
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="release_year"
              name="release_year"
              type="number"
              min="1900"
              max="2030"
              placeholder="Inserisci l'anno di uscita"
              value={formData.release_year}
              onChange={(e) => handleField("release_year", e.target.value)}
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="image">
              Immagine *
            </label>
            <input
              className="w-full border border-neutral-200 p-2 rounded-sm"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              placeholder="Inserisci l'immagine"
              onChange={(e) => handleField("image", e.target.files[0])}
              required
            />
          </div>
          <div>
            <label className="inline-block mb-2" htmlFor="abstract">
              Trama *
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
          <Button type="submit" disabled={loading}>
            {loading ? "Invio in corso..." : "Invia"}
          </Button>
        </form>
      </div>
    </Container>
  );
}
