/* eslint-disable react/prop-types */
import { AiFillPlayCircle } from "react-icons/ai";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=1718e7ca64d06a5129a10f58a692999e`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="banner h-[550px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor="true">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const navigate = useNavigate();
  const { title, poster_path, id } = item;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="avenger"
        className="w-full h-full object-cover rounded-lg object-center"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border border-white text-white rounded-lg">
            Action
          </span>
          <span className="px-4 py-2 border border-white text-white rounded-lg">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white text-white rounded-lg">
            Drama
          </span>
        </div>
        <button
          onClick={() => {
            navigate(`/movie/${id}`);
          }}
          className="flex items-center px-6 py-3 bg-primary rounded-lg font-medium"
        >
          Watch
          <span className="icon px-2 py-2 text-2xl">
            <AiFillPlayCircle />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
