import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header flex items-center justify-between gap-x-5 text-white py-10 mb-5 page-container">
      <div className="flex justify-center items-center space-x-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <img
            src="./img/logo.svg"
            alt="Logo"
            className="object-cover w-[120px] h-[60px] -translate-y-3"
          />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <span className="text-1xl font-medium flex">
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="ml-2">Home</span>
          </span>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          <span className="flex text-1xl font-medium">
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
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span className="ml-2">Movie</span>
          </span>
        </NavLink>
      </div>
      <div className="flex justify-center items-center space-x-5">
        <NavLink to="/movies">
          <div className="flex text-1xl font-medium cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Search
          </div>
        </NavLink>
        <div>
          <img
            src="./img/avatar1.jpg"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-[50%] object-cover object-center m-3 border-2 border-info"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
