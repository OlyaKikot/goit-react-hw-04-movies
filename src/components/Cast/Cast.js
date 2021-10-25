import * as Api from "../../services/api";
import { useState, useEffect } from "react";
import s from "./Cast.module.css";
export default function Cast({ filmId }) {
  const [actors, setActors] = useState(null);
  useEffect(() => {
    return Api.fetchMoviesCredits(filmId).then(setActors);
  }, [filmId]);

  return (
    <>
      {actors?.cast.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul className={s.list}>
        {actors?.cast?.map(
          (actor) =>
            actor.profile_path && (
              <li key={actor.id} className={s.item}>
                <h2>{actor.name}</h2>
                <img
                  className={s.img}
                  src={"https://image.tmdb.org/t/p/w300/" + actor?.profile_path}
                  alt=""
                />
              </li>
            )
        )}
      </ul>
    </>
  );
}
