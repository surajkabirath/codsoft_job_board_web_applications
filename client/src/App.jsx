import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios"
import { Context } from "./main";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import FAQ from "./components/Home/FAQ";


const App = () => {
  // const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/auth/getuser",
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       setUser(response.data.user);
  //       setIsAuthorized(true);
  //     } catch (error) {
  //       setIsAuthorized(false);
  //     }
  //   };
  //   fetchUser();
  // }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <FAQ/>
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  );
};

export default App;