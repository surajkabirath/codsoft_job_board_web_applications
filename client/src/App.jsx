import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import FAQ from "./components/Home/FAQ";
import Footer from "./components/Layout/Footer";
import Job from "./components/Job/Job";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "./main";

// import { useContext } from "react";
// import { Context } from "./main";



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
  }, [isAuthorized,]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job/getall" element={<Job />} />
          {/* <Route
            path="/"
            element={isAuthorized ? <Home /> : <Navigate to="/login" />}
          /> */}
          
        </Routes>
        <Job/>
        <FAQ/>
        <Footer />
        {/* {isAuthorized && <Footer />} */}
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  );
};

export default App;
