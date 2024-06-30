import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to={"/"} className="flex items-center">
            <span className="relative flex items-center">
          <span className="text-2xl font-bold text-white relative z-10">
            JOB
          </span>
          <span className="text-2xl font-bold text-white relative z-10">
            IFY
          </span>
          <span className="absolute left-1/2 transform -translate-x-1/2">
            <FaSearch className="text-7xl text-[#1AA7C5] z-1 ml-3  " />
          </span>
        </span>
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://react.dev/" className="hover:underline">
                    Reactjs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://nodejs.org/en" className="hover:underline">
                    Nodejs
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.mongodb.com/"
                    className="hover:underline"
                  >
                    MongoDB
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/surajkabirath"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/suraj-kabirath-b46b0225b/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              JOBBOARD
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/suraj.kabirath"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook className="w-4 h-4 text-indigo-500" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/surajkabirath__/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaInstagram className="w-4 h-4 text-indigo-500" />
              <span className="sr-only">Instagram page</span>
            </a>

            <a
              href="https://github.com/surajkabirath"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub className="w-4 h-4 text-indigo-500" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-kabirath-b46b0225b/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaLinkedin className="w-4 h-4 text-indigo-500 " />
              <span className="sr-only">Linkedin account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
