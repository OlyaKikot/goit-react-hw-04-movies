const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `3d673b2d8e40eafc68577fae5a6a1f4b`;
const TRENDING_URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
const MOVIE_BY_SEARCH = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`;

// https://api.themoviedb.org/3/movie/69671?api_key=3d673b2d8e40eafc68577fae5a6a1f4b&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
function fetchTrending() {
  const url = `${TRENDING_URL}&page=1}`;

  return fetch(url).then((response) => response.json());
}

function fetchMoviesBySearch(searchQuery) {
  return fetch(`${MOVIE_BY_SEARCH}&query=${searchQuery}&page=1`).then(
    (response) => response.json()
  );
}

function fetchMoviesDetailst(movie_id) {
  return fetch(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function fetchMoviesCredits(movie_id) {
  return fetch(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function fetchMoviesReviews(movie_id) {
  return fetch(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

export {
  fetchTrending,
  fetchMoviesBySearch,
  fetchMoviesDetailst,
  fetchMoviesCredits,
  fetchMoviesReviews,
};
