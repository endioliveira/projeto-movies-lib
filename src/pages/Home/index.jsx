import Header from "../../components/Header/Header";
import PopularMovies from "../../components/PopularMovies";
import BestRatedMovies from "../../components/BestRatedMovies";
import MoviesNowInTheThearters from "../../components/MoviesNowInTheaters";
import ActionMovies from "../../components/ActionMovies";
import AdventureMovies from "../../components/AdventureMovies";
import AnimationMovies from "../../components/AnimationMovies";
import ComedyMovies from "../../components/ComedyMovies";
import HorrorMovies from "../../components/HorrorMovies";
import DramaMovies from "../../components/DramaMovies";
import RomanceMovies from "../../components/RomanceMovies";

function Home() {
  return (
    <>
      <div>
        <Header />
        <PopularMovies />
        <BestRatedMovies />
        <MoviesNowInTheThearters />
        <ActionMovies />
        <AdventureMovies />
        <AnimationMovies />
        <ComedyMovies />
        <HorrorMovies />
        <DramaMovies />
        <RomanceMovies />
      </div>
    </>
  );
}

export default Home;
