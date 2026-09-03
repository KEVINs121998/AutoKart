import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">AutoKart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
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
  </div>
</nav>
    </>
  )
}

export default Navbar
