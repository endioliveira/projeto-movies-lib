import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HorrorMovies() {
  const [horrorMovies, setHorrorMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&with_genres=27`
    )
      .then((response) => response.json())
      .then((data) => setHorrorMovies(data.results));
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
          Lista de Filmes de Terror
        </h2>
        <Slider
          {...settings}
          centerMode={true}
          centerPadding="15px"
          slidesToShow={5.5}
        >
          {horrorMovies.map((horrorMovie) => {
            return (
              <div className="flex flex-col items-center" key={horrorMovie.id}>
                <Link
                  to={`/details/${horrorMovie.id}`}
                  className="hover:scale-110 transition-all"
                >
                  <img
                    className="w-44 rounded-2xl mb-8"
                    src={`${image_path}${horrorMovie.poster_path}`}
                    alt={horrorMovie.title}
                  />
                </Link>
                <div className="font-bold text-xl text-center w-44">
                  <span>{horrorMovie.title}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default HorrorMovies;
