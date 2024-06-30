
import { FaRocket, FaMobileAlt, FaCode, FaReact, FaServer, FaDatabase } from 'react-icons/fa';

const sections = [
  {
    icon: <FaRocket />,
    title: "Graphics & Design",
    description: "200 open positions in visual content creation and branding."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "150 open positions in iOS and Android app development."
  },
  {
    icon: <FaCode />,
    title: "Frontend Web Development",
    description: "300 open positions in responsive and dynamic web development."
  },
  {
    icon: <FaReact />,
    title: "MERN Stack Development",
    description: "100 open positions in full-stack development with MongoDB, Express.js, React, and Node.js."
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "250 open positions in building robust backend systems and APIs."
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "180 open positions in managing and optimizing databases."
  }
];

const PopularCategory = () => (
  <section className="text-gray-600 body-font">
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="flex flex-wrap w-full mb-3 flex-col items-center text-center">
      <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center">
        Popular Category
      </h2>
        
      </div>
      <div className="flex flex-wrap -m-4">
        {sections.map((section, index) => (
          <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                {section.icon}
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{section.title}</h2>
              <p className="leading-relaxed text-base">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularCategory;
