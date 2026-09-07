import React from "react";
import cars from "../../data/cars";
import users from "../../data/users";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const totalCars = cars.length;

  const goodCars = cars.filter(
    (car) => car.condition === "Good"
  ).length;

  const damagedCars = cars.filter(
    (car) =>
      car.condition === "Accidental" ||
      car.condition === "Flooded"
  ).length;

  const totalUsers = users.filter(
    (user) => user.role === "user"
  ).length;

  const averagePrice =
    cars.reduce((total, car) => total + car.price, 0) /
    cars.length;

  const formatPrice = (price) => {
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  return (
    <div className="container-fluid py-4 px-3 px-md-4">

      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">
            Admin Dashboard
          </h2>

          <p className="text-muted mb-0">
            Welcome to AutoKart administration panel
          </p>
        </div>

        <Link
          to="/admin/manage-cars"
          className="btn btn-primary mt-3 mt-md-0"
        >
          + Add New Car
        </Link>
      </div>

      {/* Statistics */}
      <div className="row g-3 mb-4">

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Total Cars
              </p>

              <h2 className="fw-bold mb-1">
                {totalCars}
              </h2>

              <small className="text-success">
                Cars in inventory
              </small>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Good Condition
              </p>

              <h2 className="fw-bold mb-1">
                {goodCars}
              </h2>

              <small className="text-success">
                Ready for sale
              </small>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Other Condition
              </p>

              <h2 className="fw-bold mb-1">
                {damagedCars}
              </h2>

              <small className="text-warning">
                Accidental / Flooded
              </small>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">
                Registered Users
              </p>

              <h2 className="fw-bold mb-1">
                {totalUsers}
              </h2>

              <small className="text-primary">
                Active customers
              </small>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="row g-4">

        {/* Recent Cars */}
        <div className="col-lg-8">

          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white border-0 p-4">
              <div className="d-flex justify-content-between align-items-center">

                <div>
                  <h5 className="fw-bold mb-1">
                    Recent Cars
                  </h5>

                  <p className="text-muted mb-0 small">
                    Recently added vehicles
                  </p>
                </div>

                <Link
                  to="/admin/manage-cars"
                  className="btn btn-sm btn-outline-primary"
                >
                  View All
                </Link>

              </div>
            </div>

            <div className="table-responsive">

              <table className="table align-middle mb-0">

                <thead className="table-light">
                  <tr>
                    <th>Car</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Condition</th>
                  </tr>
                </thead>

                <tbody>

                  {cars.slice(-5).reverse().map((car) => (

                    <tr key={car.id}>

                      <td>
                        <div className="d-flex align-items-center gap-3">

                          <img
                            src={car.img[0]}
                            alt={car.name}
                            style={{
                              width: "60px",
                              height: "45px",
                              objectFit: "cover",
                              borderRadius: "6px",
                            }}
                          />

                          <div>
                            <div className="fw-semibold">
                              {car.name}
                            </div>

                            <small className="text-muted">
                              {car.transmission}
                            </small>
                          </div>

                        </div>
                      </td>

                      <td>{car.year}</td>

                      <td className="fw-semibold">
                        {formatPrice(car.price)}
                      </td>

                      <td>

                        <span
                          className={`badge ${
                            car.condition === "Good"
                              ? "text-bg-success"
                              : car.condition === "Accidental"
                              ? "text-bg-danger"
                              : "text-bg-warning"
                          }`}
                        >
                          {car.condition}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* Inventory Summary */}
        <div className="col-lg-4">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body p-4">

              <h5 className="fw-bold">
                Inventory Summary
              </h5>

              <p className="text-muted small">
                Overview of your current vehicle stock
              </p>

              <hr />

              <div className="d-flex justify-content-between mb-3">
                <span>Total Vehicles</span>
                <strong>{totalCars}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Good Condition</span>
                <strong>{goodCars}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Accidental</span>

                <strong>
                  {
                    cars.filter(
                      (car) => car.condition === "Accidental"
                    ).length
                  }
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Flooded</span>

                <strong>
                  {
                    cars.filter(
                      (car) => car.condition === "Flooded"
                    ).length
                  }
                </strong>

              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span className="fw-semibold">
                  Average Car Price
                </span>

                <strong className="text-primary">
                  {formatPrice(averagePrice)}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;