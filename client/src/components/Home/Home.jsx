

import { FaSearch } from "react-icons/fa";
import AboutCompany from "./AboutCompany";


const Home = () => {
  return (
    <section className="body-font text-gray-600 bg-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className=" md:text-6xl text-2xl sm:text-2xl font-extrabold mb-4 text-black">
            Find Jobs, Build Networks, and Achieve 
            <br />
            <span className="border-g4 text-g4 border-white animate__animated animate__flash my-1 inline-block border-b-8   font-bold text-indigo-600">
               Your Goals
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-gray-800">
            Connecting talented individuals with top employers in various
            industries. 2400 Peoples are daily search in this portal, 100 user
            added job portal!
          </p>
          <form className="w-full max-w-screen-xl mx-auto">
            <div className="flex flex-col sm:flex-row w-full">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>

              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full lg:p-4 lg:text-lg z-20 text-sm text-gray-900 bg-gray-50 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg border-t-0 sm:border-t border-l-0 sm:border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Mockups, Logos, Design Templates..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 lg:p-4 h-full text-white bg-blue-700 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <FaSearch className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 lg:max-w-2xl">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src="/intro.png"
          />
        </div>
      
      </div>
      <AboutCompany/>
    </section>
  );
};

export default Home;
