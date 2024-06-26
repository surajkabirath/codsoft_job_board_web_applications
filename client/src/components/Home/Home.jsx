import { BiSearchAlt } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center lg:justify-start py-20 px-12 justify-center flex-wrap bg-gray-200">
      <div className="lg:w-3/6 w-full sm:p-2 h-full my-2 flex items-center justify-center px-4 md:items-start md:justify-start md:p-20 flex-col ">
        <h1 className="md:text-6xl text-2xl sm:text-2xl font-extrabold mb-4 text-black">
          To Choose <span className="text-indigo-600">Right Jobs.</span>{" "}
        </h1>
        <p className="md:text-lg sm:text-sm text-xs mb-20 text-gray-400">
          2400 Peoples are daily search in this portal, 100 user added job
          portal!
        </p>
        <div className="bg-gray-300 mb-6 w-full md:px-4 py-4 flex flex-col sm:flex-row items-center justify-center px-2">
          <BiSearchAlt className="text-2xl text-indigo-600 mx-2 hidden sm:flex" />
          <input
            type="text"
            placeholder="Search Jobs with Job categories like marketing ..."
            className="w-full sm:w-3/4 h-full px-2 bg-gray-200 text-base py-3 outline-none"
          />
          <button className="w-full sm:w-auto sm:inline-block px-3 py-2 my-2 sm:my-0 border border-indigo-600 rounded uppercase tracking-widest mx-4 text-white bg-indigo-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-indigo-600">
            Search
          </button>
        </div>
        <div className="w-full px-2 py-2 flex items-center justify-start flex-wrap">
          <div className="flex items-center justify-center">
            <BsFillBookmarkFill className="text-indigo-600 text-xl mx-2" />
            <h1 className="font-semibold text-lg">Suggest Tag : </h1>
          </div>
          <div className="flex items-center justify-center px-4 flex-wrap">
            <p className="px-2 text-gray-600">Software</p>
            <p className="px-2 text-gray-600">Marketing</p>
            <p className="px-2 text-gray-600">UI/UX Design</p>
          </div>
        </div>
      </div>
      <div className="w-3/6 my-2 h-full bg-gray-200 hidden items-center justify-center flex-col p-20 lg:flex">
        <img
          src="/intro.png"
          alt="no-image-found"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
