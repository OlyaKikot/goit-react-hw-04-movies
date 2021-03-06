import * as Api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import { Route } from "react-router";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useRouteMatch } from "react-router";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetails() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const { filmId } = useParams();
  const [infoFilm, setInfoFilm] = useState(null);
  console.log(location?.state?.from);
  useEffect(() => {
    return Api.fetchMoviesDetailst(filmId).then(setInfoFilm);
  }, [filmId]);
  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  if (infoFilm === null) {
    return <h1>no film</h1>;
  }
  return (
    <>
      <button type="button" onClick={onGoBack} className={s.button}>
        go back
      </button>
      <div className={s.container}>
        <img
          className={s.img}
          src={"https://image.tmdb.org/t/p/w300/" + infoFilm?.poster_path}
          alt=""
        />
        <div className={s.textContainer}>
          <h2 className={s.title}>{infoFilm?.original_title}</h2>
          <h3>Overview</h3>
          <span>{infoFilm?.overview}</span>
          <h3>Genres</h3>
          <ul className={s.listGenres}>
            {infoFilm?.genres?.map(
              (genre) =>
                infoFilm.genres && (
                  <li className={s.itemGenre} key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      <ul className={s.list}>
        <li key={infoFilm?.id}>
          <Link
            to={{
              pathname: `/movies/${infoFilm?.id}/cast`,
              state: { from: location?.state?.from },
            }}
            className={s.item}
          >
            Cast
          </Link>
        </li>
        <li key={infoFilm?.id}>
          <Link
            to={{
              pathname: `/movies/${infoFilm?.id}/reviews`,
              state: { from: location?.state?.from },
            }}
            className={s.item}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <Route path={`${url}/cast`}>
        <Cast filmId={filmId} />
      </Route>
      <Route path={`${url}/Reviews`}>
        <Reviews filmId={filmId} />
      </Route>
    </>
  );
}
