import { FaBriefcase, FaUserTie, FaQuestionCircle, FaClipboardList } from 'react-icons/fa';

const sections = [
  {
    title: 'Find Jobs',
    description: 'Explore a variety of job listings across different industries and roles.',
    icon: <FaBriefcase size={24} color="#fff" />,
  },
  {
    title: 'Post Jobs',
    description: 'Employers can post job openings to attract top talent.',
    icon: <FaUserTie size={24} color="#fff" />,
  },
  {
    title: 'FAQs',
    description: 'Learn more about using Job Board with our FAQs.',
    icon: <FaQuestionCircle size={24} color="#fff" />,
  },
  {
    title: 'Manage Applications',
    description: 'Track and manage job applications efficiently.',
    icon: <FaClipboardList size={24} color="#fff" />,
  },
];

const About = () => {
  return (
    <section className="relative pt-16 " id='about'>
      <div className="container mx-auto">
        <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center">
          About Job Board
        </h2>
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-cyan-600">
              <img
                alt="Job Board Banner"
                src="https://www.wildapricot.com/wp-content/uploads/2022/10/job-board-software.png"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-pink-500 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Explore Your Skill
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  Find the best job opportunities tailored for you. From tech
                  to business, we have the right jobs waiting for your skills.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              {sections.map((section, index) => (
                <div key={index} className="w-full md:w-6/12 px-4 ">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-500">
                        {section.icon}
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">{section.title}</h6>
                      <p className="mb-4 text-blueGray-500">{section.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
