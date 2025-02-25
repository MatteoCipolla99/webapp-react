import axios from "../api/axios";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function MoviePage() {
  const { id } = useParams();
  const fetchMovies = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchMovies, [id]);

  return <h1>Pagina del film</h1>;
}
