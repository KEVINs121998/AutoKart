import React from 'react'
import cars from '../data/cars'
import {useNavigate} from 'react-router-dom'

const Cars = () => {
  const navigate=useNavigate()
  return (
    <>
<div className="container py-4">
  <div className="row g-4">
    {cars.map((car) => (
      <div key={car.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">

          <img
            src={car.img[0]}
            className="card-img-top"
            alt={car.name}
            style={{ height: "180px", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column">

            <h5 className="card-title fw-bold mb-3">
              {car.name}
            </h5>

            <div className="d-flex justify-content-between text-muted small mb-2">
              <span>{car.year}</span>
              <span>{car.km.toLocaleString()} km</span>
            </div>

            <p className="card-text fs-5 fw-bold mb-3">
              ₹{car.price.toLocaleString()}
            </p>

            <div className="d-flex justify-content-between small mb-3">
              <span className="badge bg-light text-dark border">
                {car.owner}
              </span>

              <span
                className={`badge ${
                  car.condition === "Good"
                    ? "bg-success"
                    : "bg-warning text-dark"
                }`}
              >
                {car.condition}
              </span>
            </div>

            <button className="btn btn-primary mt-auto w-100" onClick={() => navigate("cardetails")}>
              View Details
            </button>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Cars
