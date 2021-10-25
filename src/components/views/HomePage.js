import * as Api from "../../services/api";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MoviesList from "../MoviesList/MoviesList";
import s from "./HomePage.module.css";

export default function HomePage() {
  // const location = useLocation();
  const [listFilm, setListFilm] = useState([]);

  useEffect(() => {
    return Api.fetchTrending(1)
      .then((film) => film.results)
      .then(setListFilm)
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className={s.title}> Trending today </h2>
      <MoviesList listFilmsBySearch={listFilm}></MoviesList>
    </>
  );
}
