import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [search, setSearch] = useState("");

  const searchForAMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;

        if (results.length > 0) {
          const movieId = results[0].id;
          window.location.href = `/details/${movieId}`;
        }
      });
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl">Biblioteca de filmes</h1>
      <div className="flex items-center">
        <input
          className="w-64 h-8 rounded p-4 text-black"
          placeholder="Pesquise por um nome de filme"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className="bg-purple-700 border-none rounded h-8 cursor-pointer	py-1 px-8 ml-4 text-xl transition hover:bg-purple-800"
          onClick={searchForAMovie}
        >
          <FaSearch className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default Header;
