import { Link, useLocation } from "react-router-dom";
import React from "react";
import s from "./MoviesList.module.css";

export default function Search({ listFilmsBySearch }) {
  const location = useLocation();
  return (
    <>
      <ul className={s.list}>
        {listFilmsBySearch?.map(
          (film) =>
            film.original_title && (
              <li key={film.id}>
                <Link
                  className={s.item}
                  to={{
                    pathname: `/movies/${film.id}`,
                    state: {
                      from:
                        location.pathname === "/"
                          ? "/"
                          : "/movies" + location.search,
                    },
                  }}
                >
                  - {film.original_title}
                </Link>
              </li>
            )
        )}
      </ul>
    </>
  );
}
