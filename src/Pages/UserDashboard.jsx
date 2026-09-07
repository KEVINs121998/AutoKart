import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const UserDashboard = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(user);

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{
                width: "100px",
                height: "100px",
                fontSize: "40px",
              }}
            >
              {(profile.name || "U")
                .charAt(0)
                .toUpperCase()}
            </div>

            <h4 className="fw-bold">
              {profile.name || "User"}
            </h4>

            <p className="text-muted mb-3">
              {profile.email}
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
                onClick={() => {
                  if (editing) {
                    setProfile(user);
                  }

                  setEditing(!editing);
                }}
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
                  name="name"
                  className="form-control"
                  value={profile.name || ""}
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
                  className="form-control bg-light"
                  value={profile.email || ""}
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
                  value={profile.pno || ""}
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
                  value={profile.city || ""}
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
                  value={profile.address || ""}
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

            <h2 className="fw-bold">3</h2>

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

            <h2 className="fw-bold">5</h2>

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

            <h2 className="fw-bold">8</h2>

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