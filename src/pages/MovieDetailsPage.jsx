/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "../components/movie/MovieCard";

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=1718e7ca64d06a5129a10f58a692999e
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher);

  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.getImageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`${tmdbAPI.getImageOriginal(poster_path)}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10 text-white">
          {genres.map((item) => (
            <span
              key={item.id}
              className="px-4 py-2 border-primary text-primary border rounded-lg mb-10"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-sm leading-relaxed text-white max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieInfos("credits", movieId),
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length < 0) return null;
  return (
    <>
      <div className="py-10">
        <h2 className="text-center text-3xl mb-10 text-white">Casts</h2>
        <div className="grid grid-cols-4 gap-6">
          {cast.slice(0, 4).map((item) => (
            <div key={item.id} className="cast-item">
              <img
                src={tmdbAPI.getImageOriginal(item.profile_path)}
                className="w-full h-[350px] object-cover rounded-lg mb-3"
                alt=""
              />
              <h3 className="text-white text-center text-xl font-medium">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieInfos("videos", movieId),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (results.length < 0) return null;
  return (
    <div className="py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-3xl mb-10 text-white">Trailer</h2>
        {results.length > 0 &&
          results.slice(0, 1).map((item) => (
            <div key={item.id} className="w-full">
              <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                allowFullScreen
                className="w-[1000px] h-[600px] object-fill mx-auto"
              ></iframe>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieInfos("similar", movieId),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (results.length < 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10 text-white text-center">
        Similar movies
      </h2>
      <div className="movie-list">
        <div className="movie-list">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {results.length > 0 &&
              results.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCard item={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
