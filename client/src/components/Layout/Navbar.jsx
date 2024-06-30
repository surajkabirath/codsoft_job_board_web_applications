import { useContext, useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import { toast } from "react-toastify";
import Profile from "../Auth/Profile";
import { FiX, FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const navigateTo = useNavigate();
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handlePostJobClick = () => {
    if (!isAuthorized) {
      navigateTo("/login");
    } else {
      navigateTo("/job/post");
    }
  };
  const handleBrowseJobClick = (e) => {
    if (!isAuthorized) {
      e.preventDefault();
      navigateTo("/login");
    }
  };

  return (
    <nav className=" fixed w-full z-20 py-1 top-0 start-0 border-b border-gray-200 bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to={"/"}>
          <span className="relative flex items-center">
            <span className="text-2xl font-bold text-white relative z-10">
              JOB
            </span>
            <span className="text-2xl font-bold text-white relative z-10">
              IFY
            </span>
            <span className="absolute left-1/2 transform -translate-x-1/2">
              <FaSearch className="text-7xl text-[#0DA088] z-1 ml-3  " />
            </span>
          </span>
        </NavLink>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user && user.role === "employee" ? (
            <>
              <NavLink to={"/job/post"}>
                <button
                  type="button"
                  onClick={handlePostJobClick}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
                >
                  Post a Job
                </button>
              </NavLink>
            </>
          ) : (
            <></>
          )}

          {isAuthorized ? (
            <Profile handleLogout={handleLogout} />
          ) : (
            <NavLink to={"/login"}>
              <button
                type="button"
                className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Login
              </button>
            </NavLink>
          )}

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            {isOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
            <li>
              <NavLink
                to={"/"}
                onClick={closeMenu}
                className="block py-2 px-3 text-xl text-white  rounded md:text-gray-300 md: md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 px-3 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <Link
                to={"/job/getall"}
                onClick={handleBrowseJobClick}
                className="block py-2 px-3 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0"
              >
                Browse Job
              </Link>
            </li>
            <li>
              <a
                href="#blog"
                onClick={closeMenu}
                className="block py-2 px-3 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0"
              >
                Blog
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-2 px-3 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
