import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "./../../config/key";

function Home() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center my-16 mx-0 text-3xl ">
          Lista de Filmes Populares
        </h1>
        <ul className="list-none grid	gap-y-16 gap-x-12">
          {movies.map((movie) => {
            return (
              <li className="flex flex-col items-center" key={movie.id}>
                <Link
                  to={`/details/${movie.id}`}
                  className="hover:scale-110 transition-all"
                >
                  <img
                    className="w-44 rounded-2xl	mb-8"
                    src={`${image_path}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <span className="font-bold text-xl text-center">
                  {movie.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
