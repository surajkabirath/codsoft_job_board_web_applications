import { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import { toast } from "react-toastify";
import Profile from "../Auth/Profile";

const Navbar = () => {
  const navigateTo = useNavigate();
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/auth/logout",
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            JOBBOARD
          </span>
        </Link>
        <div className="flex md:hidden space-x-3 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <AiOutlineClose className="w-5 h-5" />
            ) : (
              <AiOutlineMenu className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:order-2 space-x-3 rtl:space-x-reverse">
          {isAuthorized ? (
            <Profile handleLogout={handleLogout} />
          ) : (
            <NavLink to={"/login"}>
              <button
                type="button"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Login
              </button>
            </NavLink>
          )}
          {user && user.role === "employee" ? (
            <>
              <NavLink to={"/job/post"}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Post A Job
                </button>
              </NavLink>
            </>
          ) : (
            <></>
          )}
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to={"/"}
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/job/getall"}
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Browse Job
              </Link>
            </li>
            <li>
              <Link
                to={"/blog"}
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
            {user && user === "employee" ? (
              <>
                <li className="md:hidden">
                  <NavLink to={"/job/post"}>
                    <button
                      type="button"
                      className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                      Post A Job
                    </button>
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}

            {isAuthorized ? (
              <li className="md:hidden mt-2">
                <button type="button" onClick={handleLogout}>
                  <Profile handleLogout={handleLogout} />
                </button>
              </li>
            ) : (
              <NavLink to={"/login"}>
                <li className="md:hidden mt-2">
                  <button
                    type="button"
                    className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Login
                  </button>
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
