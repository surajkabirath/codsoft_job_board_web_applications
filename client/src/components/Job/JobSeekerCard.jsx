
import PropTypes from "prop-types";

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Name</span>
        <span className="ml-auto text-gray-900">{element.name}</span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Email</span>
        <span className="ml-auto text-gray-900">{element.email}</span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Phone</span>
        <span className="ml-auto text-gray-900">{element.phone}</span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Address</span>
        <span className="ml-auto text-gray-900">{element.address}</span>
      </div>
      <span className="title-font font-medium text-2xl text-gray-900">Cover Letter</span>
      <p className="leading-relaxed mb-4">{element.coverLetter}</p>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Resume</span>
        <span className="ml-auto">
          <img
            src={element.resume.url}
            alt="resume"
            className="h-20 w-20 object-cover cursor-pointer"
            onClick={() => openModal(element.resume.url)}
          />
        </span>
      </div>
      <div className="flex mt-4">
        <button
          className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          onClick={() => deleteApplication(element._id)}
        >
          Delete Application
        </button>
      </div>
    </div>
  );
};

JobSeekerCard.propTypes = {
  element: PropTypes.object.isRequired,
  deleteApplication: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default JobSeekerCard;
