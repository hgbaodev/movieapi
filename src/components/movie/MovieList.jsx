import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import { useEffect, useState } from "react";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
//https://api.themoviedb.org/3/movie/now_playing?api_key=1718e7ca64d06a5129a10f58a692999e

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);

  const isLoading = !data && !error;

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list">
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 &&
              movies.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCardSkeleton item={item}></MovieCardSkeleton>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string,
};

export default MovieList;
