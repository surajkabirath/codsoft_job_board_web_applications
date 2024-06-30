
import PropTypes from 'prop-types';
import { FaTimes } from "react-icons/fa";

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 md:z-11">
      <div className="relative flex items-center justify-center w-full h-full">
        <button
          className="absolute top-9 right-9 text-indigo-500 text-5xl focus:outline-none hover:cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        <img src={imageUrl} alt="Resume" className="max-w-2xl h-auto" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
