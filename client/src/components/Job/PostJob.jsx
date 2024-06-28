import { useContext, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jobCategoryData from "./jobCategoryData";

const PostJob = () => {
    const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("");

  const navigateTo = useNavigate();
  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType == "Fixed Salary") {
      setSalaryFrom("");
      setSalaryTo("");
    } else if (salaryType == "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        "http://localhost:8000/api/job/post",
        fixedSalary.length >= 4
          ? {
            company,
              title,
              description,
              category,
              country,
              city,
              location,

              fixedSalary,
            }
          : {
            company,
              title,
              description,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setCompany("");
        setTitle("");
        setCategory("");
        setCountry("");
        setCity("");
        setLocation("");
        setSalaryFrom("");
        setSalaryTo("");
        setFixedSalary("");
        setSalaryType("");
        setDescription("");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  if (!isAuthorized || (user && user.role !== "employee")) {
    navigateTo("/");
  }
  return (
    <div className="bg-white  border-4 rounded-lg shadow relative max-w-screen-xl mx-auto">
      <div className="flex justify-center items-center p-5 border-b rounded-t mt-12">
        <h3 className="text-xl font-semibold">Post New Job</h3>
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={handleJobPost}>
            
          <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
               Company Name
              </label>
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Company Mame"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Job Title"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Category
              </label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              >
                 <option value="">Select Category</option>
        {jobCategoryData.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Country"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="City"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="salaryType"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Salary Type
              </label>
              <select
                name="salaryType"
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              >
                <option value="default">Select Salary Type</option>
                <option value="Fixed Salary">Fixed Salary</option>
                <option value="Ranged Salary">Ranged Salary</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3 mt-7">
              {salaryType === "Fixed Salary" ? (
                <input
                  type="number"
                  placeholder="Enter Fixed Salary"
                  value={fixedSalary}
                  onChange={(e) => setFixedSalary(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
              ) : salaryType === "Ranged Salary" ? (
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Salary From"
                    value={salaryFrom}
                    onChange={(e) => setSalaryFrom(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  />
                  <input
                    type="number"
                    placeholder="Salary To"
                    value={salaryTo}
                    onChange={(e) => setSalaryTo(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  />
                </div>
              ) : (
                <p className="text-red-500">Please provide Salary Type *</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Job Description
            </label>
            <textarea
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
              placeholder="Job Description"
            />
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              type="submit"
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
