import axios from "../api/axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";

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
          <div className="col-span-12 md:col-span-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, natus
            modi! Tempora distinctio ex consequatur, sunt vitae provident
            architecto eligendi modi alias voluptates repudiandae tenetur illo
            reprehenderit enim nihil qui.
          </div>
          <div className="col-span-12 md:col-span-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, natus
            modi! Tempora distinctio ex consequatur, sunt vitae provident
            architecto eligendi modi alias voluptates repudiandae tenetur illo
            reprehenderit enim nihil qui.
          </div>
          <div className="col-span-12 md:col-span-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, natus
            modi! Tempora distinctio ex consequatur, sunt vitae provident
            architecto eligendi modi alias voluptates repudiandae tenetur illo
            reprehenderit enim nihil qui.
          </div>
          <div className="col-span-12 md:col-span-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, natus
            modi! Tempora distinctio ex consequatur, sunt vitae provident
            architecto eligendi modi alias voluptates repudiandae tenetur illo
            reprehenderit enim nihil qui.
          </div>
          <div className="col-span-12 md:col-span-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, natus
            modi! Tempora distinctio ex consequatur, sunt vitae provident
            architecto eligendi modi alias voluptates repudiandae tenetur illo
            reprehenderit enim nihil qui.
          </div>
        </div>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </Container>
    </>
  );
}
