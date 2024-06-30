import { FaUserPlus, FaSearch, FaHandshake } from 'react-icons/fa';

// Define data for each section
const sections = [
  {
    icon: <FaUserPlus className="w-8 h-8" />,
    title: 'Create an Account',
    description: 'Sign up for free to get started.',
  },
  {
    icon: <FaUserPlus className="w-8 h-8" />,
    title: 'Sign In',
    description: 'Logged in to get started.',
  },
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: 'Find for a Jobs/Post a Job',
    description: 'Browse and apply to job postings/Post a New Job.',
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: 'Get Hired',
    description: 'Connect with employers and land your dream job.',
  },
];

// Inside your component, use the map function to render sections
const HowItWorksSection = () => (
  <section className="text-gray-600 body-font">
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center">
        How It Works
      </h2>
      <div className="flex flex-wrap -m-4 justify-center">
        {sections.map((section, index) => (
          <div key={index} className="p-4 sm:w-1/2 lg:w-1/4 w-full">
            <div className="rounded-lg h-full bg-gray-100 p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white mb-5 flex-shrink-0">
                {section.icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-bold">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-base text-bold">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

