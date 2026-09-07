import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  // Get logged-in user
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(loggedInUser));
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Save profile
  const handleSave = () => {
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    // Also update the user inside users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((item) =>
      item.id === user.id ? user : item
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setEditing(false);

    alert("Profile updated successfully!");
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  // Prevent rendering before user is loaded
  if (!user) {
    return null;
  }

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="mb-4">
        <h2 className="fw-bold">My Profile</h2>

        <p className="text-muted">
          Manage your account and car booking details
        </p>
      </div>

      <div className="row g-4">

        {/* Profile Card */}
        <div className="col-lg-4">

          <div className="card shadow-sm border-0 text-center p-4">

            {/* Avatar */}
            <div
              className="rounded-circle bg-primary text-white d-flex
              align-items-center justify-content-center mx-auto mb-3"
              style={{
                width: "100px",
                height: "100px",
                fontSize: "40px",
              }}
            >
              {user.fname?.charAt(0).toUpperCase()}
            </div>

            <h4 className="fw-bold">
              {user.fname}
            </h4>

            <p className="text-muted mb-3">
              {user.email}
            </p>

            <button
              className="btn btn-outline-danger w-100"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

        {/* Profile Details */}
        <div className="col-lg-8">

          <div className="card shadow-sm border-0 p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h4 className="fw-bold mb-0">
                Personal Information
              </h4>

              <button
                className="btn btn-primary"
                onClick={() => setEditing(!editing)}
              >
                {editing ? "Cancel" : "Edit Profile"}
              </button>

            </div>

            <div className="row g-3">

              {/* Name */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fname"
                  className="form-control"
                  value={user.fname || ""}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>

              {/* Email */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email || ""}
                  onChange={handleChange}
                  disabled
                />

              </div>

              {/* Phone */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="pno"
                  className="form-control"
                  value={user.pno || ""}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>

              {/* City */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={user.city || ""}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>

              {/* Address */}
              <div className="col-12">

                <label className="form-label fw-semibold">
                  Address
                </label>

                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={user.address || ""}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>

            </div>

            {/* Save Button */}
            {editing && (
              <button
                className="btn btn-success mt-4"
                onClick={handleSave}
              >
                Save Changes
              </button>
            )}

          </div>

        </div>

      </div>

      {/* User Activity */}
      <div className="row g-4 mt-2">

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4">

            <h6 className="text-muted">
              My Bookings
            </h6>

            <h2 className="fw-bold">
              3
            </h2>

            <p className="mb-0 text-muted">
              Total car bookings
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4">

            <h6 className="text-muted">
              Saved Cars
            </h6>

            <h2 className="fw-bold">
              5
            </h2>

            <p className="mb-0 text-muted">
              Cars added to favorites
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4">

            <h6 className="text-muted">
              Recently Viewed
            </h6>

            <h2 className="fw-bold">
              8
            </h2>

            <p className="mb-0 text-muted">
              Cars recently viewed
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;