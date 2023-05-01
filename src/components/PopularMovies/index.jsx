import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerMode: true,
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-center my-16 mx-0 text-3xl">
          Lista de Filmes Populares
        </h2>
        <Slider
          {...settings}
          centerMode={true}
          centerPadding="15px"
          slidesToShow={5.5}
        >
          {popularMovies.map((popularMovie) => {
            return (
              <div className="flex flex-col items-center" key={popularMovie.id}>
                <Link
                  to={`/details/${popularMovie.id}`}
                  className="hover:scale-110 transition-all"
                >
                  <img
                    className="w-44 rounded-2xl mb-8"
                    src={`${image_path}${popularMovie.poster_path}`}
                    alt={popularMovie.title}
                  />
                </Link>
                <div className="font-bold text-xl text-center w-44">
                  <span>{popularMovie.title}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default PopularMovies;
