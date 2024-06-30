import axios from "axios";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import jobCategoryData from "./jobCategoryData";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          "https://codsoft-job-board-web-applications-backend.vercel.app/api/job/getmyjobs",
          { withCredentials: true }
        );
        setMyJobs(data.myJobs);
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([]);
      }
    };
    fetchJobs();
  }, []);

  if (!isAuthorized || (user && user.role !== "employee")) {
    navigateTo("/");
  }

  const handleEnableEdit = (jobId) => {
    setEditingMode(jobId);
  };

  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find((job) => job._id === jobId);
    await axios
      .put(`https://codsoft-job-board-web-applications-backend.vercel.app/api/job/update/${jobId}`, updatedJob, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setEditingMode(null);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleDeleteJob = async (jobId) => {
    await axios
      .delete(`https://codsoft-job-board-web-applications-backend.vercel.app/api/job/delete/${jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleInputChange = (jobId, field, value) => {
    setMyJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  return (
    <div className="bg-white border-4 rounded-lg shadow relative max-w-screen-xl mx-auto">
      <div className="flex justify-center items-center p-5 border-b rounded-t mt-20">
        <h3 className="text-xl font-semibold">Your Posted Jobs</h3>
      </div>

      <div className="p-6 space-y-6">
        {myJobs.length > 0 ? (
          <>
            {myJobs.map((element) => (
              <div className="border-b py-4" key={element._id}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={element.title}
                      onChange={(e) =>
                        handleInputChange(element._id, "title", e.target.value)
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                      disabled={editingMode !== element._id}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={element.country}
                      onChange={(e) =>
                        handleInputChange(
                          element._id,
                          "country",
                          e.target.value
                        )
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                      disabled={editingMode !== element._id}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={element.city}
                      onChange={(e) =>
                        handleInputChange(element._id, "city", e.target.value)
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                      disabled={editingMode !== element._id}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">
                      Category
                    </label>
                    <select
                      value={element.category}
                      onChange={(e) =>
                        handleInputChange(
                          element._id,
                          "category",
                          e.target.value
                        )
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                      disabled={editingMode !== element._id}
                    >
                      {jobCategoryData.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                      
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">
                      Salary
                    </label>
                    {element.fixedSalary ? (
                      <input
                        type="number"
                        value={element.fixedSalary}
                        onChange={(e) =>
                          handleInputChange(
                            element._id,
                            "fixedSalary",
                            e.target.value
                          )
                        }
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                        disabled={editingMode !== element._id}
                      />
                    ) : (
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="number"
                          value={element.salaryFrom}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "salaryFrom",
                              e.target.value
                            )
                          }
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                          disabled={editingMode !== element._id}
                        />
                        <input
                          type="number"
                          value={element.salaryTo}
                          onChange={(e) =>
                            handleInputChange(
                              element._id,
                              "salaryTo",
                              e.target.value
                            )
                          }
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                          disabled={editingMode !== element._id}
                        />
                      </div>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">
                      Expired
                    </label>
                    <select
                      value={element.expired}
                      onChange={(e) =>
                        handleInputChange(
                          element._id,
                          "expired",
                          e.target.value
                        )
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                      disabled={editingMode !== element._id}
                    >
                      <option value={true}>TRUE</option>
                      <option value={false}>FALSE</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label className="text-sm font-medium text-gray-900 block mb-2">
                      Job Description
                    </label>
                    <textarea
                      rows="6"
                      value={element.description}
                      onChange={(e) =>
                        handleInputChange(
                          element._id,
                          "description",
                          e.target.value
                        )
                      }
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-4"
                      disabled={editingMode !== element._id}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-gray-200 rounded-b space-x-2">
                  {editingMode === element._id ? (
                    <>
                      <button
                        onClick={() => handleUpdateJob(element._id)}
                        className="text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        {/* <FaCheck className="inline-block mr-1" /> */}
                        Save
                      </button>
                      <button
                        onClick={handleDisableEdit}
                        className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDeleteJob(element._id)}
                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        {/* <FaTrash className="inline-block mr-1" /> */}
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEnableEdit(element._id)}
                        className="text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteJob(element._id)}
                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        {/* <FaTrash className="inline-block mr-1" /> */}
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-center text-gray-700">You have no jobs posted.</p>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
