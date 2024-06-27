import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/job/getall", {
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

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200  py-10 mt-20 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">All Available Jobs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job._id} className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
                <h2 className="text-2xl font-semibold mb-3 text-blue-600">{job.title}</h2>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Category:</span> {job.category}</p>
                <p className="text-gray-600 mb-4"><span className="font-semibold">Location:</span> {job.country}</p>
                <div className="flex justify-end">
                  <Link to={`/job/${job._id}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Job Details</Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center col-span-full">No jobs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Job;
