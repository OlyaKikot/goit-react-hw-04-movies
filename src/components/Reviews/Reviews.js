import * as Api from "../../services/api";
import { useState, useEffect } from "react";
import s from "./Reviews.module.css";

export default function Reviews({ filmId }) {
  const [actorsInfo, setActorsInfo] = useState(null);
  useEffect(() => {
    return Api.fetchMoviesReviews(filmId).then(setActorsInfo);
  }, [filmId]);
  return (
    <>
      {actorsInfo?.results.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul className={s.list}>
        {actorsInfo?.results?.map(
          (actorInfo) =>
            actorInfo.author && (
              <li className={s.item} key={actorInfo.id}>
                <h2>{actorInfo.author}</h2>

                <p>{actorInfo.content}</p>
              </li>
            )
        )}
      </ul>
    </>
  );
}
