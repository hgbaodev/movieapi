import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
