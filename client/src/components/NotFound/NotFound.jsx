
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className=" p-8 md:p-20 text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-700 mt-4">Oops! Page not found</h2>
        <p className="text-gray-500 mt-4">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
