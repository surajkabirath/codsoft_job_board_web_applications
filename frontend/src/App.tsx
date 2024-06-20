// import { useContext, useEffect } from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Context } from "./context/ContextProvider";
// import axios from "axios";
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  );
};

export default App;
