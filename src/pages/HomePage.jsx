import axios from "../api/axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <div className="container">
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </>
  );
}
