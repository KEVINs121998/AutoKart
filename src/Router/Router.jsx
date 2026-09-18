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
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import Inventory from "../Pages/Inventory";
import Payment from "../Pages/Payment";
import Services from "../Pages/Services";
import ManageCars from "../Pages/Admin/ManageCars";
import ManageBookings from "../Pages/Admin/ManageBookings";
import ManageEnquiries from "../Pages/Admin/ManageEnquiries";
import ManageUsers from "../Pages/Admin/ManageUsers";
import SellCar from "../Pages/SellCar";
import ManageSellRequests from "../Pages/Admin/ManageSellReuests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { index: true, element: <Home /> },
      { path: "cars", element: <Cars /> },
      { path: "cardetails/:id", element: <CarDetails /> },
      { path: "services", element: <Services /> },
      { path: "emi", element: <Emi /> },
      { path: "contact", element: <Contact /> },
      { path: "payment", element: <Payment /> },
           {
        path: "sell",
        element: (
          <ProtectedRoute role="user">
            <SellCar />
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
      {
        path: "profile",
        element: (
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: "manage-cars",
        element: (
          <ProtectedRoute role="admin">
            <ManageCars />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <ProtectedRoute role="admin">
            <ManageUsers />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <ProtectedRoute role="admin">
            <ManageBookings />
          </ProtectedRoute>
        ),
      },
        {
        path: "manage-sell",
        element: (
          <ProtectedRoute role="admin">
            <ManageSellRequests />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-enquiries",
        element: (
          <ProtectedRoute role="admin">
            <ManageEnquiries />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
