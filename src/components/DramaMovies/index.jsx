import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../config/key";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DramaMovies() {
  const [dramaMovies, setDramaMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&with_genres=18`
    )
      .then((response) => response.json())
      .then((data) => setDramaMovies(data.results));
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
          Lista de Filmes de Drama
        </h2>
        <Slider
          {...settings}
          centerMode={true}
          centerPadding="65px"
          slidesToShow={5.5}
        >
          {dramaMovies.map((dramaMovie) => {
            return (
              <div className="flex flex-col items-center" key={dramaMovie.id}>
                <Link
                  to={`/details/${dramaMovie.id}`}
                  className="hover:scale-110 transition-all"
                >
                  <img
                    className="w-44 rounded-2xl mb-8"
                    src={`${image_path}${dramaMovie.poster_path}`}
                    alt={dramaMovie.title}
                  />
                </Link>
                <div className="font-bold text-xl text-center w-44">
                  <span>{dramaMovie.title}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default DramaMovies;
