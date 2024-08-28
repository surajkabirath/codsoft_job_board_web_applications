import { useContext, useState } from "react";
import { Context } from "../../main";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);
  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();
  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
  };
  const { id } = useParams();

  const handleApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setResume("");
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthorized || (user && user.role === "employee")) {
    navigateTo("/");
  }
  return (
    <div className="bg-white  border-4 rounded-lg shadow relative max-w-screen-xl mx-auto">
      
      <div className="flex justify-center items-center p-5 border-b rounded-t mt-20">
      <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-12 text-center flex justify-center items-center">
        Application
      </h2>
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={handleApplication}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                placeholder="Enter your Email"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="number"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Phone Number
              </label>

              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                placeholder="phone number"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                placeholder="Enter your address"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="select resume"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Select Resume
              </label>

              <input
                type="file"
                accept=".pdf, .jpg, .png"
                
                onChange={handleFileChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Cover Letter
            </label>
            <textarea
              rows="6"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-6000 focus:border-indigo-600 block w-full p-4"
              placeholder="cover letter...."
            />
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              type="submit"
              className="text-white bg-indigo-600 hover:indigo-600  focus:ring-indigo-600 focus:border-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
