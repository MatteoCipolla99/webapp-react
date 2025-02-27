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

  return (
    <Container>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <h3 className="text-2xl font-medium">{movie.director}</h3>
          <Paragraph size="lg" className="my-4">
            {movie.abstract}
          </Paragraph>

          {movie.reviews && movie.reviews.length > 0 && (
            <div className="mt-8">
              <h2 className="text-3xl font-semibold">Recensioni</h2>
              <div className="space-y-4 mt-4">
                {movie.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <Review review={review} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
