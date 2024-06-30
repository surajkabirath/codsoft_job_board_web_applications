
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full pt-5 px-4 mb-8 mx-auto">
      <nav>
        <ul className="flex justify-center">
          <li>
            <button
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous"
            >
              <AiOutlineLeft className="text-sm" />
            </button>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <button
                className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${page === currentPage ? 'bg-indigo-500 text-white shadow-md shadow-pink-500/20' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500'} p-0 text-sm transition duration-150 ease-in-out`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next"
            >
              <AiOutlineRight className="text-sm" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };
export default Pagination;
