import  { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { FaArrowRight } from "react-icons/fa";
import Pagination from "./Pagination";


const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://codsoft-job-board-web-applications-backend.vercel.app/api/job/getall", {
          withCredentials: true,
        });
        setJobs(res.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };

    if (isAuthorized) {
      fetchJobs();
    } else {
      navigateTo("/");
    }
  }, [isAuthorized, navigateTo]);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const currentJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
      <div className="max-w-screen-xl px-5 py-24 mx-auto">
        <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center">
          Available Jobs
        </h2>
        <div className="flex flex-wrap -m-4">
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => (
              <div
                key={job._id}
                className="p-4 md:w-1/3 flex flex-col items-start"
              >
                <span className="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-500 text-xs font-medium tracking-widest border-gray-300">
                  {job.category}
                </span>
                <h2 className="sm:text-xl text-xl text-bold title-font font-medium text-gray-900 mt-4 mb-4">
                  {job.title}
                </h2>
                <p className="leading-relaxed mb-8 text-black">Location: <span className="text-indigo-500"> {job.location}</span></p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-300 mt-auto w-full">
                  <Link
                    className="text-indigo-500 inline-flex items-center"
                    to={`/job/${job._id}`}
                  >
                    More Details
                    <FaArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center col-span-full">
              No jobs available
            </p>
          )}
        </div>
        {jobs.length > jobsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default Job;
