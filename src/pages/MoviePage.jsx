import axios from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovies = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovies, [id, navigate]);

  return <h1>Pagina del film: {movie.title}</h1>;
}
