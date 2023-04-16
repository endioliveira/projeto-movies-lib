import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date } = data;

        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        };

        setMovie(movie);
      });
  }, []);

  return (
    <>
      <div className="py-32 px-80 ">
        <div className="flex items-center justify-center">
          <img
            className="w-72 rounded-2xl"
            src={movie.image}
            alt={movie.sinopse}
          />
          <div className="flex items-start flex-col ml-16 max-w-[50%]">
            <h1 className="mb-7 mx-0 text-4xl">{movie.title}</h1>
            <span className="leading-6 mb-4 text-xl">
              Sinopse: {movie.sinopse}
            </span>
            <span className="opacity-50 text-xl">
              Data de Lançamento: {movie.releaseDate}
            </span>
            <Link to="/">
                <button className="bg-purple-700 border-none rounded-2xl cursor-pointer	py-1 px-8 mt-4 text-xl transition hover:bg-purple-800">
                  Volte para página inicial
                </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
