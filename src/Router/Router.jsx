import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Common/Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import AuthLayout from "../Common/AuthLayout";

import Cars from "../Pages/Cars";
import Contact from "../Pages/Contact";
import Emi from "../Pages/Emi";
import CarDetails from "../Pages/CarDetails";
import Services from "../Pages/Services";
import Inventory from "../Pages/Inventory";
import Payment from "../Pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "home", element: <Home /> },
       { path: "services", element: <Services /> },
       { path: "inventory", element: <Inventory /> },
      { path: "cars", element: <Cars /> },
      { path: "contact", element: <Contact /> },
      { path: "emi", element: <Emi /> },
      { path: "cardetails/:id", element: <CarDetails /> },
      { path: "payment", element: <Payment /> },
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
