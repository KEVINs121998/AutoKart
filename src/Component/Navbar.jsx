import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import '../Css/Navbar.css'
import { useInventory } from "../Context/InventoryContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { inventory } = useInventory();
  const navigate=useNavigate()

const handleLogout = () => {
  logout();
  navigate("/login");
};

const closeNavbar = () => {
  const navbar = document.getElementById("navbarContent");

  if (navbar && navbar.classList.contains("show")) {
    const bsCollapse = window.bootstrap.Collapse.getInstance(navbar);

    if (bsCollapse) {
      bsCollapse.hide();
    }
  }
};

  return (
    <nav className="navbar navbar-expand-lg autokart-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand autokart-logo" to="/">
          <span className="logo-icon">
            <i className="bi bi-car-front-fill"></i>
          </span>
          Auto<span>Kart</span>
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Links */}
          <ul className="navbar-nav mx-auto gap-lg-2">

            <li className="nav-item">
              <NavLink
onClick={closeNavbar}
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
onClick={closeNavbar}
                to="/cars"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Cars
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
onClick={closeNavbar}
                to="/services"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
onClick={closeNavbar}
                to="/emi"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                EMI Calculator
              </NavLink>
            </li>

             {user && (<li className="nav-item">
              <NavLink
onClick={closeNavbar}
                to="/sell"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Sell Car
              </NavLink>
            </li>)}

            <li className="nav-item">
              <NavLink
onClick={closeNavbar}
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Right Side */}
          <div className="navbar-actions d-flex align-items-center gap-2">

            {/* Inventory */}
            {user && (
              <Link to="/inventory" onClick={closeNavbar} className="nav-icon-btn">
                <i className="bi bi-heart"></i>
                <span>My Inventory({inventory.length})</span>
              </Link>
            )}

            {!user ? (
              <div className="d-flex align-items-center gap-2">
    <Link to="/login" onClick={closeNavbar} className="login-btn">
      <i className="bi bi-person"></i>
      Login
    </Link>
    <Link to="/register" onClick={closeNavbar} className="register-btn">
      <i className="bi bi-person-plus"></i>
      Register
    </Link>
  </div>
            ) : (
              <div className="dropdown">
                <button
                  className="profile-btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <span className="profile-circle">
                    <i className="bi bi-person-fill"></i>
                  </span>

                  <span className="profile-name">
                    {user.name}
                  </span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end profile-dropdown">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/profile"
                      onClick={closeNavbar}
                    >
                      <i className="bi bi-person me-2"></i>
                      My Profile
                    </Link>
                  </li>

                  {user.role === "admin" && (
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <Link
                          className="dropdown-item admin-link"
                          to="/admin/dashboard"
                        >
                          <i className="bi bi-speedometer2 me-2"></i>
                          Admin Dashboard
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <button
                      className="dropdown-item logout-item"
                      onClick={() => {
                        handleLogout();
                        closeNavbar();
                      }
                      }
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </li>

                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;