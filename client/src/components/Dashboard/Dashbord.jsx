import { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaThLarge, FaUser } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Context } from "../../main";

const DashBoard = () => {
  const [sidenav, setSidenav] = useState(true);
  const { user } = useContext(Context);
  const userInitial = user?.name ? user.name[0].toUpperCase() : "?";

  return (
    <div className="h-full w-screen flex flex-row font-poppins antialiased">
      <button
        onClick={() => setSidenav(!sidenav)}
        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
      >
        <FaBars className="w-5 h-5" />
      </button>
      <Transition
        show={sidenav}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="bg-white h-screen shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden fixed"
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            {userInitial}
            <span className="text-teal-600">.</span>
          </h1>
          <div id="profile" className="space-y-3">
            <div className="w-16 h-16 rounded-full cursor-pointer bg-gray-800 text-white mx-auto flex justify-center items-center">
              {userInitial}
            </div>
            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                {user.name}
              </h2>
              <p className="text-xs text-gray-500 text-center">{user.role}</p>
            </div>
          </div>

          <div id="menu" className="flex flex-col space-y-2">
            {user && user.role === "employee" ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out flex items-center"
                >
                  <FaThLarge className="w-6 h-6 fill-current inline-block mr-2" />
                  <span>Posted Job</span>
                </Link>
                <Link
                  to="/products"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
                >
                  <FaUser className="w-6 h-6 fill-current inline-block mr-2" />
                  <span>Applicant Job</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/applications/me"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out flex items-center"
                >
                  <FaUser className="w-6 h-6 fill-current inline-block mr-2" />
                  <span>My Job</span>
                </Link>
              </>
            )}
            <Link
              to="/reports"
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center"
            >
              <RiLogoutBoxLine className="w-6 h-6 fill-current inline-block mr-2" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </Transition>
      <div className="bg-white h-screen flex-grow ml-30 md:ml-60 lg:ml-60 transition duration-300 ease-in-out p-4">
        {/* Your main content goes here */}
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
};

export default DashBoard;
