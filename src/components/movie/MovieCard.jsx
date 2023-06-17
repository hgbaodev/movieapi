/* eslint-disable react-refresh/only-export-components */
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const { title, vote_average, poster_path, release_date, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 te-800 h-full select-none">
      <img
        src={tmdbAPI.getImage500(poster_path)}
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
        <Button
          onClick={() => {
            navigate(`/movie/${id}`);
          }}
          bgColor="secondary"
        >
          Watch now
          <span className="icon px-2 py-2 text-2xl">
            <AiFillPlayCircle />
          </span>
        </Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      Something went wrong with this component
    </p>
  );
}

export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 te-800 h-full select-none">
      <LoadingSkeleton className="w-full h-[250px] object-cover rounded-lg mb-5"></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">
          <LoadingSkeleton className="w-full h-[20px] rounded-lg mb-5"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between text-sm mb-10">
          <LoadingSkeleton width="50px" className="h-[10px]"></LoadingSkeleton>
          <LoadingSkeleton width="50px" className="h-[10px]"></LoadingSkeleton>
        </div>
        <LoadingSkeleton className="w-ful h-[45px] rounded-lg"></LoadingSkeleton>
      </div>
    </div>
  );
};

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});
