import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const MyApplications = () => {
  const navigateTo = useNavigate();
  const { isAuthorized, user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const endpoint =
          user && user.role === "employee"
            ? "http://localhost:8000/api/application/employee/getall"
            : "http://localhost:8000/api/application/jobseeker/getall";

        const res = await axios.get(endpoint, { withCredentials: true });
        setApplications(res.data.applications);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    if (isAuthorized) {
      fetchApplications();
    }
  }, [isAuthorized, user]);

  if (!isAuthorized) {
    navigateTo("/");
    return null;
  }

  const deleteApplication = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/application/delete/${id}`,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== id)
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="body-font overflow-hidden text-gray-600">
    <div className="container mx-auto px-5 py-24 flex justify-center">
      <div className="max-w-screen-xl mx-auto lg:w-2/3">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <div className="mb-10 w-full lg:mb-0 lg:w-full lg:py-6 lg:pr-10">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-500">
              {user && user.role === "job-seeker"
                ? "My Applications"
                : "Applications From Job Seekers"}
            </h1>
            <div className="mb-4 flex">
              <a className="flex-grow border-b-2 border-indigo-500 px-1 py-2 text-lg text-indigo-500">
                Application Details
              </a>
            </div>
            {applications.length === 0 ? (
              <h4>No Applications Found</h4>
            ) : (
              applications.map((application) => (
                <div key={application._id}>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Name</span>
                    <span className="ml-auto text-gray-900">
                      {application.name}
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Email</span>
                    <span className="ml-auto text-gray-900">
                      {application.email}
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Phone</span>
                    <span className="ml-auto text-gray-900">
                      {application.phone}
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Address</span>
                    <span className="ml-auto text-gray-900">
                      {application.address}
                    </span>
                  </div>
                  <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                    <span className="text-gray-500">Resume</span>
                    <span className="ml-auto">
                      <img
                        src={application.resume.url}
                        alt="resume"
                        className="h-20 w-20 object-cover cursor-pointer"
                        onClick={() => openModal(application.resume.url)}
                      />
                    </span>
                  </div>
                  <span className="title-font font-medium text-2xl text-gray-900">
                    cover Letter
                  </span>
                  <p className="leading-relaxed mb-4">
                    {application.coverLetter}
                  </p>
                  {user && user.role === "job-seeker" && (
                    <div className="flex mt-4">
                      <button
                        className="ml-auto flex rounded border-0 bg-red-600 px-6 py-2 text-white hover:bg-red-400 focus:outline-none"
                        onClick={() => deleteApplication(application._id)}
                      >
                        Delete Application
                      </button>
                    </div>
                  )}
                  <br className="mb-10"/>
                </div>
              ))
            )}
            {modalOpen && <Modal imageUrl={resumeImageUrl} onClose={closeModal} />}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default MyApplications;
