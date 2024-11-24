import { Link, NavLink } from "react-router-dom";
import profileImg from "../../../assets/images/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-red-600 text-lg" : "text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-red-600 text-lg" : "text-lg"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive ? "font-bold text-red-600 text-lg" : "text-lg"
          }
        >
          Career
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "font-bold text-red-600 text-lg" : "text-lg"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mycourse"
              className={({ isActive }) =>
                isActive ? "font-bold text-red-600 text-lg" : "text-lg"
              }
            >
              My Course
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end items-center">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 md:w-10 rounded-full mr-2">
              <img
                alt="Tailwind CSS Navbar component"
                src={user ? user?.photoURL : profileImg}
              />
            </div>
          </div>

          {user ? (
            <>
              {" "}
              <button
                onClick={handleLogout}
                className=" btn btn-sm font-poppins text-base md:text-xl bg-[#403F3F] text-white"
              >
                Logout
              </button>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="btn btn-sm font-poppins text-base md:text-xl md:px-8 bg-[#403F3F] text-white"
              >
                login
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
