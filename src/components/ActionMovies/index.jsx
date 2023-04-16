import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "./../../config/key";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ActionMovies() {
  const [actionMovies, setActionMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&with_genres=28`
    )
      .then((response) => response.json())
      .then((data) => setActionMovies(data.results));
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
  };

  return (
    <>
      <div>
        <h2 className="text-center my-16 mx-0 text-3xl">
          Lista de Filmes de Ação
        </h2>
        <Slider {...settings} centerMode={true} centerPadding="65px" slidesToShow={5.5}>
          {actionMovies.map((actionMovie) => {
            return (
              <div className="flex flex-col items-center" key={actionMovie.id}>
                <Link
                  to={`/details/${actionMovie.id}`}
                  className="hover:scale-110 transition-all"
                >
                  <img
                    className="w-44 rounded-2xl mb-8"
                    src={`${image_path}${actionMovie.poster_path}`}
                    alt={actionMovie.title}
                  />
                </Link>
                <div className="font-bold text-xl text-center w-44">
                  <span>{actionMovie.title}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default ActionMovies;
