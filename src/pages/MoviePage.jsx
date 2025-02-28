import axios from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import FormAddReview from "../components/FormAddReview";

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
      <Link to="/">
        <i className="fa-solid fa-house"></i> HomePage
      </Link>
      <section className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-4">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="col-span-12 md:col-span-8 space-y-4 bg-white p-4">
          <p className="text-xl font-bold">{movie.title}</p>
          <p className="text-lg font-semibold">{movie.director}</p>
          <p>{movie.abstract}</p>
        </div>
      </section>
      {movie.reviews?.length > 0 && (
        <section className="mt-4 bg-white p-4 space-y-4">
          <p className="text-lg font-semibold">Recensioni</p>
          <ul>
            {movie?.reviews?.map((review) => (
              <li className="py-2 border-b border-neutral-200" key={review.id}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="mt-4 bg-white p-4 space-y-4">
        <p>Aggiungi una recensione</p>
        <FormAddReview />
      </section>
    </Container>
  );
}
