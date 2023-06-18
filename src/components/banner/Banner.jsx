/* eslint-disable react/prop-types */
import { AiFillPlayCircle } from "react-icons/ai";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=1718e7ca64d06a5129a10f58a692999e`,
    fetcher
  );

  const loading = !data && !error;

  const movies = data?.results || [];

  return (
    <section className="banner h-[550px] page-container mb-20 overflow-hidden">
      {loading && <BannerItemSkeleton></BannerItemSkeleton>}
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
        <Button
          onClick={() => {
            navigate(`/movie/${id}`);
          }}
          bgColor="secondary"
          className="font-medium"
        >
          Watch
          <span className="icon px-2 py-2 text-2xl">
            <AiFillPlayCircle />
          </span>
        </Button>
      </div>
    </div>
  );
}

export const BannerItemSkeleton = () => {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <LoadingSkeleton className="h-full object-cover rounded-lg object-center"></LoadingSkeleton>
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">
          <LoadingSkeleton width="200px" height="30px"></LoadingSkeleton>
        </h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border border-white text-white rounded-lg">
            <LoadingSkeleton width="40px" height="20px"></LoadingSkeleton>
          </span>
          <span className="px-4 py-2 border border-white text-white rounded-lg">
            <LoadingSkeleton width="40px" height="20px"></LoadingSkeleton>
          </span>
          <span className="px-4 py-2 border border-white text-white rounded-lg">
            <LoadingSkeleton width="40px" height="20px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton width="80px" height="40px"></LoadingSkeleton>
      </div>
    </div>
  );
};

export default Banner;
