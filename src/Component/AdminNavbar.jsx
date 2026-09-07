import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
   const navigate = useNavigate();

  // Get logged-in user from localStorage
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/admin">AutoKart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="manage-cars">Manage Cars</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="manage-users">Manage Users</Link>
        </li> 

        <li className="nav-item">
          <Link className="nav-link" to="manage-enquiries">Manage Enquiries</Link>
        </li>

         <li className="nav-item">
          <Link className="nav-link" to="manage-bookings">Manage Bookings</Link>
        </li>

      </ul>
    </div>

     {/* Right Side */}
        <div className="d-flex align-items-center gap-3 ms-auto">

          {user ? (
            <>
              <span className="text-white">
                Welcome, {user.name}
              </span>

              <button
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
             <>
                           <Link
                           className="btn btn-outline-light"
                           to="/login"
                         >
                           Login
                         </Link>
                         
                           <Link
                 className="btn btn-primary"
                 to="/register"
               >
                 Register
               </Link>
                         </>
          )}

        </div>
  </div>
</nav>
    </>
  )
}

export default AdminNavbar
