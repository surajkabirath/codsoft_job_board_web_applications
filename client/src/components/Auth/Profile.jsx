import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../../main";
import { NavLink } from "react-router-dom";

const Profile = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(Context);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const userInitial = user?.name ? user.name[0].toUpperCase() : "?";
  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded-full cursor-pointer bg-white  text-black items-center justify-center flex"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        onClick={toggleDropdown}
      >
       {userInitial}
      </div>

      {/* Dropdown menu */}
      <div
        id="userDropdown"
        className={`absolute right-0 mt-2 z-10 ${
          isOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <div className="px-4 py-3 text-sm text-gray-900">
          <div>{user.name}</div>
          <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="avatarButton"
        >
          {user && user.role ==="job-seeker"?( <li>
            <NavLink  to="/applications/me" className="block px-4 py-2 hover:bg-gray-100">
              My Jobs
            </NavLink>
          </li>):(
            <>
             <NavLink  to="/job/me" className="block px-4 py-2 hover:bg-gray-100">
             View All Jobs
            </NavLink>
            <NavLink  to="/applications/me" className="block px-4 py-2 hover:bg-gray-100">
              Applicant Job
            </NavLink>
            </>
             
            
          )}
         
         
        </ul>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Profile;
