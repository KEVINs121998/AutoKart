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
import UserDashboard from "../Pages/UserDashboard";
import ProtectedRoute from "../Component/ProtectedRoute";
import AdminDashboard from "../Pages/AdminDashboard";
import Inventory from "../Pages/Inventory";
import Payment from "../Pages/Payment";
import Services from "../Pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
         { path: "payment", element: <Payment /> },
         { path: "services", element: <Services /> },
      { path: "cars", element: <Cars /> },
      { path: "contact", element: <Contact /> },
      { path: "emi", element: <Emi /> },
      { path: "cardetails/:id", element: <CarDetails /> },
            { path: "login", element: <Login /> },
                  { path: "register", element: <Register /> },
                  {
  path: "profile",
  element: (
    <ProtectedRoute role="user">
      <UserDashboard />
    </ProtectedRoute>
  ),
},
     {
  path: "inventory",
  element: (
    <ProtectedRoute role="user">
      <Inventory />
    </ProtectedRoute>
  ),
},
    ],
  },
  {
    path:"/admin",
    element: <AuthLayout />,
    children: [
      { path: "dashboard", element:
        <ProtectedRoute role="admin">
          <AdminDashboard /> 
        </ProtectedRoute>
        },
    ],
  },
]);

export default router;
