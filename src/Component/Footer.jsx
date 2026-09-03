import React from 'react'

const Footer = () => {
  return (
    <>
<footer className=" mt-5">
  <div className="container py-4">
    <div className="row">

      {/* Company */}
      <div className="col-md-6 mb-3 mb-md-0">
        <h5 className="fw-bold">AutoKart</h5>
        <p className="text-secondary mb-0">
          Your trusted destination for quality used cars.
        </p>
      </div>

      {/* Links */}
      <div className="col-md-6 text-md-end">
        <h6 className="fw-bold">Quick Links</h6>

        <div className="d-flex justify-content-md-end gap-3">
          <a href="/" className=" text-decoration-none">
            Home
          </a>
          <a href="/cars" className=" text-decoration-none">
            Cars
          </a>
          <a href="/about" className=" text-decoration-none">
            About
          </a>
          <a href="/contact" className=" text-decoration-none">
            Contact
          </a>
        </div>
      </div>

    </div>

    <hr className="border-secondary my-3" />

    <div className="text-center">
      <small className="text-secondary">
        © 2026 AutoKart. All Rights Reserved.
      </small>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
