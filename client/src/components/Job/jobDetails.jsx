import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch(() => {
        navigateTo("/notfound");
      });
  }, [id, navigateTo]);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/login");
    }
  }, [isAuthorized, navigateTo]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Job Details</h3>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>Title:</strong> <span>{job.title}</span>
          </p>
          <p className="text-lg">
            <strong>Category:</strong> <span>{job.category}</span>
          </p>
          <p className="text-lg">
            <strong>Country:</strong> <span>{job.country}</span>
          </p>
          <p className="text-lg">
            <strong>City:</strong> <span>{job.city}</span>
          </p>
          <p className="text-lg">
            <strong>Location:</strong> <span>{job.location}</span>
          </p>
          <p className="text-lg">
            <strong>Description:</strong> <span>{job.description}</span>
          </p>
          <p className="text-lg">
            <strong>Job Posted On:</strong> <span>{job.jobPostedOn}</span>
          </p>
          <p className="text-lg">
            <strong>Salary:</strong>{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          {user && user.role !== "employee" && (
            <Link
              to={`/application/${job._id}`}
              className="inline-block w-full sm:w-auto px-6 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Apply Now
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
