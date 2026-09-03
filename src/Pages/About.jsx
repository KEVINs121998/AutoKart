import React from "react";
import "../Css/About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate=useNavigate();

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
       <p className="text-muted">
          Learn more about our car dealership
        </p>
      </div>

      {/* About Content */}
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://img.magnific.com/free-photo/people-vehicle-dealership-buying-new-car_342744-749.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Car dealership"
            className="img-fluid rounded"
          />
        </div>

        {/* Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">
            Welcome to AutoKart
          </h2>

          <p>
            AutoKart is a trusted car dealership offering a wide range of
            quality new and used cars at affordable prices.
          </p>

          <p>
            Our goal is to make buying a car simple and comfortable. Our team
            helps customers find the right car according to their needs and
            budget.
          </p>

          <p>
            We believe in providing quality vehicles, transparent pricing,
            and excellent customer service.
          </p>

          <button className="btn btn-primary mt-2" onClick={() => navigate("/cars")
          }>
            View Cars
          </button>
        </div>

      </div>

      {/* Simple Stats */}
      <div className="row text-center mt-5">

        <div className="col-6 col-md-3 mb-3">
          <h3 className="fw-bold">10+</h3>
          <p className="text-muted">Years Experience</p>
        </div>

        <div className="col-6 col-md-3 mb-3">
          <h3 className="fw-bold">500+</h3>
          <p className="text-muted">Cars Available</p>
        </div>

        <div className="col-6 col-md-3 mb-3">
          <h3 className="fw-bold">5000+</h3>
          <p className="text-muted">Happy Customers</p>
        </div>

        <div className="col-6 col-md-3 mb-3">
          <h3 className="fw-bold">24/7</h3>
          <p className="text-muted">Customer Support</p>
        </div>

      </div>

    </div>
  );
};

export default About;