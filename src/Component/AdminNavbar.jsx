
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../Css/AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4">

        {/* Brand */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/admin"
        >
          <i className="bi bi-car-front-fill text-primary fs-3 me-2"></i>

          <span className="fw-bold fs-4">
            Auto<span className="text-primary">Kart</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="adminNavbar"
        >

          {/* Navigation */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "text-primary fw-semibold"
                      : "text-dark"
                  }`
                }
              >
                <i className="bi bi-speedometer2 me-1"></i>
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/admin/manage-cars"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "text-primary fw-semibold"
                      : "text-dark"
                  }`
                }
              >
                <i className="bi bi-car-front me-1"></i>
                Manage Cars
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/admin/manage-users"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "text-primary fw-semibold"
                      : "text-dark"
                  }`
                }
              >
                <i className="bi bi-people me-1"></i>
                Users
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/admin/manage-sell"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "text-primary fw-semibold"
                      : "text-dark"
                  }`
                }
              >
                <i className="bi bi-people me-1"></i>
                Sell Requests
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/admin/manage-enquiries"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "text-primary fw-semibold"
                      : "text-dark"
                  }`
                }
              >
                <i className="bi bi-chat-left-text me-1"></i>
                Enquiries
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/admin/manage-bookings"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive
                      ? "text-primary fw-semibold"
                      : "text-dark"
                  }`
                }
              >
                <i className="bi bi-calendar-check me-1"></i>
                Bookings
              </NavLink>
            </li>

          </ul>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-3">

            {/* User */}
            {user && (
              <div className="d-flex align-items-center">
                <div
                  className="bg-primary bg-opacity-10 rounded-circle
                             d-flex align-items-center justify-content-center
                             me-2"
                  style={{
                    width: "38px",
                    height: "38px",
                  }}
                >
                  <i className="bi bi-person-fill text-primary"></i>
                </div>

                <div className="d-none d-xl-block">
                  <small className="text-muted d-block">
                    Welcome
                  </small>

                  <span className="fw-semibold">
                    {user.name}
                  </span>
                </div>
              </div>
            )}

            {/* Logout */}
            <button
              className="btn btn-outline-danger btn-sm px-3"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-1"></i>
              Logout
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;