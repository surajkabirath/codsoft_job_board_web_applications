import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    // console.log("Fetched ID:", id);
    axios
      .get(`http://localhost:8000/api/job/singlejob/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log("Job details fetched:", res.data); /
        setJob(res.data.job);
      })
      .catch((error) => {
        console.error(
          "Error fetching job details:",
          error.response ? error.response.data : error.message
        );
        navigateTo("/notfound");
      });
  }, [id, navigateTo]);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/login");
    }
  }, [isAuthorized, navigateTo]);

  return (
    <section className="body-font overflow-hidden text-gray-600 ">
      <div className="container mx-auto px-5 py-24 flex justify-center ">
        <div className="max-w-screen-xl mx-auto lg:w-2/3">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <div className="mb-6 w-full lg:mb-0 lg:w-full lg:py-6 lg:pr-10">
              <h1 className="title-font mb-4 text-3xl font-medium text-gray-500">
                {job.company}
              </h1>
              <div className="mb-4 flex">
                <a className="flex-grow border-b-2 border-indigo-500 px-1 py-2 text-lg text-indigo-500">
                  Job Details
                </a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Job Title</span>
                <span className="ml-auto text-gray-900">{job.title}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Category</span>
                <span className="ml-auto text-gray-900">{job.category}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Country</span>
                <span className="ml-auto text-gray-900">{job.country}</span>
              </div>
              <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                <span className="text-gray-500">City</span>
                <span className="ml-auto text-gray-900">{job.city}</span>
              </div>
              <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                <span className="text-gray-500">Location</span>
                <span className="ml-auto text-gray-900">{job.location}</span>
              </div>
              {job.fixedSalary ? (
                <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                  <span className="text-gray-500">Salary</span>
                  <span className="ml-auto text-gray-900">
                    ${job.fixedSalary}
                  </span>
                </div>
              ) : (
                <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                  <span className="text-gray-500">Salary</span>
                  <span className="ml-auto text-gray-900">
                    {job.salaryFrom} - {job.salaryTo}
                  </span>
                </div>
              )}
              <div className="mb-6 flex border-b border-t border-gray-200 py-2">
                <span className="text-gray-500">Job Posted On</span>
                <span className="ml-auto text-gray-900">{job.jobPostedOn}</span>
              </div>
              

              <h1 className="border-b border-t border-gray-300 text-3xl text-gray-700">
                Job Description
              </h1>
              <p className="mb-4 leading-relaxed">{job.description}</p>
              {user && user.role === "employee" ? (
                <></>
              ) : (
                <div className="flex">
                  <NavLink to={`/application/${job._id}`}>
                  <button className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                    Apply Now
                  </button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
