import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../../main";

const Profile = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(Context);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded-full cursor-pointer bg-gray-800 text-white items-center justify-center flex"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        onClick={toggleDropdown}
      >
        {user.name[0].toUpperCase()}
      </div>

      {/* Dropdown menu */}
      <div
        id="userDropdown"
        className={`absolute right-0 mt-2 z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <div className="px-4 py-3 text-sm text-gray-900">
          <div>{user.name}</div>
          <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
             Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </a>
          </li>
        </ul>
        <button onClick={handleLogout} className="py-1 w-full text-left">
          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sign out
          </a>
        </button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Profile;
