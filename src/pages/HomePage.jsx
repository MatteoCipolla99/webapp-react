import axios from "../api/axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";

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
      <Container>
        <div className="grid grid-cols-12 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col-span-12 md:col-span-4">
              <Card
                image={movie.image}
                title={movie.title}
                abstract={movie.abstract}
                director={movie.director}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
