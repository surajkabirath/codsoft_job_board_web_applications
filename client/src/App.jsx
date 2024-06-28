import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import FAQ from "./components/Home/FAQ";
import Footer from "./components/Layout/Footer";
import Job from "./components/Job/Job";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./main";
import JobDetails from "./components/Job/jobDetails";
import NotFound from "./components/NotFound/NotFound";
import PropTypes from "prop-types";
import PostJob from "./components/Job/PostJob";
import MyJobs from "./components/Job/MyJobs";
import Application from "./components/Application/Application";



const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/auth/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <ContentVisibilityWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/job/getall" element={<Job />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/job/post" element={<PostJob />} />
            <Route path="/job/me" element={<MyJobs />} />
            <Route path="/application/:id" element={<Application />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </ContentVisibilityWrapper>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  );
};

const ContentVisibilityWrapper = ({ children }) => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
   
    if (location.pathname === "/404") {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  }, [location.pathname]);

  return (
    <>
      {showContent && <Navbar />}
      {children}
      {showContent && <FAQ />}
      {showContent && <Footer />}
    </>
  );
};

ContentVisibilityWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
