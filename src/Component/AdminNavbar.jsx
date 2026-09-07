import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

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
    <a className="navbar-brand" href="#">AutoKart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="cars">Cars Stock</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link" href="emi">Emi Calculator</a>
        </li>

           <li className="nav-item">
          <a className="nav-link" href="about">About Us</a>
        </li>

         <li className="nav-item">
          <a className="nav-link" href="contact">Contact Us</a>
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
