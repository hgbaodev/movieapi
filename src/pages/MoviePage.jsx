import { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";
import { apiKey, fetcher } from "../config";
import useSWR from "swr";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
// |

const itemsPerPage = 20;

const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page='${nextPage}'`
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterDebounce = useDebounce(filter, 1000);

  const { data, error } = useSWR(url, fetcher);

  const loading = !data && !error;

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query='${filterDebounce}'&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];
  console.log(url);

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
    return () => {};
  }, [data]);

  const handlePageClick = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % data.total_pages;
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here to search...."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 bg-primary text-white rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 rounded-full  border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
