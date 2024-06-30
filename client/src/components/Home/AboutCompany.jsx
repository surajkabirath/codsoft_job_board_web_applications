import {
    FaBuilding,
    FaSuitcase,
    FaUserFriends,
    FaHandshake,
  } from "react-icons/fa";
  
  const AboutCompany = () => {
    return (
      <section className="text-gray-600 body-font">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
              <div className="px-4 py-6 rounded-lg">
                <FaBuilding className="text-indigo-500 w-12 h-12 mb-3 mx-auto" />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  50+
                </h2>
                <p className="leading-relaxed">Companies</p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
              <div className="px-4 py-6 rounded-lg">
                <FaSuitcase className="text-indigo-500 w-12 h-12 mb-3 mx-auto" />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  600+
                </h2>
                <p className="leading-relaxed">Posted Jobs</p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
              <div className="px-4 py-6 rounded-lg">
                <FaUserFriends className="text-indigo-500 w-12 h-12 mb-3 mx-auto" />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.2K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/4">
              <div className="px-4 py-6 rounded-lg">
                <FaHandshake className="text-indigo-500 w-12 h-12 mb-3 mx-auto" />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  400+
                </h2>
                <p className="leading-relaxed">Hired</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutCompany;
  
  