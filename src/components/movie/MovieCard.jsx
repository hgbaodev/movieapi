/* eslint-disable react/prop-types */
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";

const MovieCard = ({ item }) => {
  const { title, vote_average, poster_path, release_date } = item;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 te-800 h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span className="flex items-center justify-center">
            {vote_average}
            <AiFillStar color="#FFD700" />
          </span>
        </div>
        <button className="flex items-center justify-center px-6 py-3 capitalize w-full bg-primary rounded-lg mt-auto">
          Watch now
          <span className="icon px-2 py-2 text-2xl">
            <AiFillPlayCircle />
          </span>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
