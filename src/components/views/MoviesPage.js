import * as Api from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MoviesList from "../MoviesList/MoviesList";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const history = useHistory();
  const [listFilmsBySearch, setListFilmsBySearch] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (history.location?.search !== "") {
      const prevQuery = history.location?.search.split("=")[1];
      Api.fetchMoviesBySearch(prevQuery)
        .then((film) => film.results)
        .then(setListFilmsBySearch);
      setQuery(prevQuery);
    }
  }, [history.location?.search]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim() === "") {
      return;
    }
    Api.fetchMoviesBySearch(query)
      .then((film) => film.results)
      .then(setListFilmsBySearch);
    history.push({ ...history.location, search: `?query=${query}` });
  };

  return (
    <>
      <form onSubmit={onSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <MoviesList listFilmsBySearch={listFilmsBySearch}></MoviesList>
    </>
  );
}
