import axios from "../api/axios";
import { useEffect } from "react";

export default function HomePage() {
  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return <h1> Home Page </h1>;
}
