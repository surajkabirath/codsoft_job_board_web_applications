
import { FaMicrosoft, FaApple, FaFacebook } from 'react-icons/fa';
import { SiTesla } from 'react-icons/si';

const companies = [
  {
    id: 1,
    title: "Microsoft",
    location: "Redmond, Washington, USA",
    openPositions: 10,
    icon: <FaMicrosoft className="text-indigo-500 w-12 h-12 mb-3 inline-block" />,
  },
  {
    id: 2,
    title: "Tesla",
    location: "Palo Alto, California, USA",
    openPositions: 5,
    icon: <SiTesla className="text-indigo-500 w-12 h-12 mb-3 inline-block" />,
  },
  {
    id: 3,
    title: "Apple",
    location: "Cupertino, California, USA",
    openPositions: 20,
    icon: <FaApple className="text-indigo-500 w-12 h-12 mb-3 inline-block" />,
  },
  {
    id: 4,
    title: "Facebook",
    location: "Menlo Park, California, USA",
    openPositions: 20,
    icon: <FaFacebook className="text-indigo-500 w-12 h-12 mb-3 inline-block" />,
  },
];


const PopularCompanies = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-screen-xl mx-auto px-5 py-24 ">
        <div className="flex flex-col text-center w-full mb-2">
          <h1 className="text-g4 animate__animated animate__flash my-1     font-bold text-indigo-600 text-3xl  title-font  mb-12 text-center flex justify-center items-center">Top Companies</h1>
          
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {companies.map(company => (
            <div key={company.id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
                {company.icon}
                <h2 className="title-font font-medium text-3xl text-gray-900">{company.title}</h2>
                <p className="text-gray-500">{company.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCompanies;
