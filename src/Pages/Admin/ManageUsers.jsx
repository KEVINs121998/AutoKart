import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const ManageUsers = () => {
  const {
    users,
    deleteUser,
    changeUserRole,
  } = useContext(AuthContext);

  const [search, setSearch] = useState("");

  // Search users
  const filteredUsers = users.filter((user) => {
    const name = user.name || "";
    const email = user.email || "";

    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      email.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Delete user
  const handleDelete = (id) => {
    const selectedUser = users.find(
      (user) => user.id === id
    );

    // Don't allow admin deletion
    if (selectedUser?.role === "admin") {
      alert("Admin user cannot be deleted.");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedUser?.name || "this user"}?`
    );

    if (!confirmDelete) return;

    deleteUser(id);
  };

  // Change role
  const handleRoleChange = (id) => {
    const selectedUser = users.find(
      (user) => user.id === id
    );

    if (!selectedUser) return;

    const newRole =
      selectedUser.role === "admin"
        ? "user"
        : "admin";

    const confirmChange = window.confirm(
      `Change ${selectedUser.name}'s role to ${newRole}?`
    );

    if (!confirmChange) return;

    changeUserRole(id);
  };

  return (
    <div className="container-fluid py-4 px-3 px-md-4">

      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Manage Users
          </h2>

          <p className="text-muted mb-0">
            View and manage registered AutoKart users
          </p>
        </div>

        <div className="mt-3 mt-md-0">
          <span className="badge text-bg-primary fs-6">
            {users.length} Users
          </span>
        </div>

      </div>

      {/* Search */}
      <div className="card border-0 shadow-sm mb-4">

        <div className="card-body">

          <input
            type="text"
            className="form-control"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* Users Table */}
      <div className="card border-0 shadow-sm">

        <div className="card-body p-0">

          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

              <thead className="table-light">

                <tr>
                  <th className="ps-4">
                    User
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Role
                  </th>

                  <th>
                    ID
                  </th>

                  <th className="text-center">
                    Actions
                  </th>
                </tr>

              </thead>

              <tbody>

                {filteredUsers.length > 0 ? (

                  filteredUsers.map((user) => (

                    <tr key={user.id}>

                      {/* User */}
                      <td className="ps-4">

                        <div className="d-flex align-items-center gap-3">

                          <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                            style={{
                              width: "45px",
                              height: "45px",
                              fontWeight: "600",
                            }}
                          >
                            {(user.name || "U")
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>

                            <div className="fw-semibold">
                              {user.name || "Unknown User"}
                            </div>

                            <small className="text-muted">
                              {user.role === "admin"
                                ? "Administrator"
                                : "Customer"}
                            </small>

                          </div>

                        </div>

                      </td>

                      {/* Email */}
                      <td>
                        {user.email || "No email"}
                      </td>

                      {/* Role */}
                      <td>

                        <span
                          className={`badge ${
                            user.role === "admin"
                              ? "text-bg-dark"
                              : "text-bg-success"
                          }`}
                        >
                          {user.role || "user"}
                        </span>

                      </td>

                      {/* ID */}
                      <td>
                        #{user.id}
                      </td>

                      {/* Actions */}
                      <td>

                        <div className="d-flex justify-content-center gap-2">

                          <button
                            className="btn btn-sm btn-outline-warning"
                            onClick={() =>
                              handleRoleChange(user.id)
                            }
                          >
                            Change Role
                          </button>

                          {user.role !== "admin" && (

                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() =>
                                handleDelete(user.id)
                              }
                            >
                              Delete
                            </button>

                          )}

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center py-5 text-muted"
                    >
                      No users found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ManageUsers;