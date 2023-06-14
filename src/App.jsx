import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[550px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg"
            alt="avenger"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
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
            <button className="flex items-center px-6 py-3 bg-primary rounded-lg font-medium">
              Watch
              <span className="icon px-2 py-2 text-2xl">
                <AiFillPlayCircle />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-10 text-white">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://danviet.mediacdn.vn/upload/2-2019/images/2019-05-03/avengers-infinity-war-2-1556858276-width1280height720.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className=" text-xl font-bold mb-3">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span className="flex items-center justify-center">
                7.4
                <AiFillStar color="#FFD700" />
              </span>
            </div>
            <button className="flex items-center justify-center px-6 py-3 capitalize w-full bg-primary rounded-lg">
              Watch now
              <span className="icon px-2 py-2 text-2xl">
                <AiFillPlayCircle />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-10 text-white">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rates movie
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://danviet.mediacdn.vn/upload/2-2019/images/2019-05-03/avengers-infinity-war-2-1556858276-width1280height720.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className=" text-xl font-bold mb-3">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span className="flex items-center justify-center">
                7.4
                <AiFillStar color="#FFD700" />
              </span>
            </div>
            <button className="flex items-center justify-center px-6 py-3 capitalize w-full bg-primary rounded-lg">
              Watch now
              <span className="icon px-2 py-2 text-2xl">
                <AiFillPlayCircle />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-10 text-white">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top trending
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://danviet.mediacdn.vn/upload/2-2019/images/2019-05-03/avengers-infinity-war-2-1556858276-width1280height720.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className=" text-xl font-bold mb-3">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span className="flex items-center justify-center">
                7.4
                <span className="icon">
                  <AiFillStar color="#FFFF00" />
                </span>
              </span>
            </div>
            <button className="flex items-center justify-center px-6 py-3 capitalize w-full bg-primary rounded-lg">
              Watch now
              <span className="icon px-2 py-2 text-2xl">
                <AiFillPlayCircle />
              </span>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
