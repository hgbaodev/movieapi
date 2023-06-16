export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "1718e7ca64d06a5129a10f58a692999e";
export const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieInfos: (type, movieId) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (filterDebounce, nextPage) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query='${filterDebounce}'&page=${nextPage}`,
  getImageOriginal: (backdrop_path) =>
    `https://image.tmdb.org/t/p/original/${backdrop_path}`,
  getImage500: (poster_path) =>
    `https://image.tmdb.org/t/p/w500/${poster_path}`,
};
