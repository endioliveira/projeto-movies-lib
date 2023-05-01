import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviesNowInTheThearters() {
  const [moviesNowInTheThearters, setMoviesNowInTheThearters] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMoviesNowInTheThearters(data.results));
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
      <div className="p-4">
        <h2 className="text-center my-16 mx-0 text-3xl">
          Lista de Filmes que Estão Agora nos Cinemas
        </h2>
        <Slider
          {...settings}
          centerMode={true}
          centerPadding="15px"
          slidesToShow={5.5}
        >
          {moviesNowInTheThearters.map((moviesNowInTheThearter) => {
            return (
              <div
                className="flex flex-col items-center"
                key={moviesNowInTheThearter.id}
              >
                <Link
                  to={`/details/${moviesNowInTheThearter.id}`}
                  className="hover:scale-110 transition-all"
                >
                  <img
                    className="w-44 rounded-2xl mb-8"
                    src={`${image_path}${moviesNowInTheThearter.poster_path}`}
                    alt={moviesNowInTheThearter.title}
                  />
                </Link>
                <div className="font-bold text-xl text-center w-44">
                  <span>{moviesNowInTheThearter.title}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default MoviesNowInTheThearters;
