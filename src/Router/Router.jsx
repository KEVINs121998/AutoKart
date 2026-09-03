import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Common/Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import AuthLayout from "../Common/AuthLayout";
import About from "../Pages/About";
import Cars from "../Pages/Cars";
import Contact from "../Pages/Contact";
import Emi from "../Pages/Emi";
import CarDetails from "../Pages/CarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cars", element: <Cars /> },
      { path: "contact", element: <Contact /> },
      { path: "emi", element: <Emi /> },
      { path: "cardetails", element: <CarDetails /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
