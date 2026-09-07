import React, { useState } from "react";
import carsData from "../../data/cars";

const ManageCars = () => {
  const [cars, setCars] = useState(carsData);

  const [search, setSearch] = useState("");
  const [condition, setCondition] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [editingCar, setEditingCar] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    year: "",
    price: "",
    km: "",
    owner: "",
    condition: "Good",
    transmission: "Manual",
    img: ["/images/car.jpg"],
  });

  // Search + Filter
  const filteredCars = cars.filter((car) => {

    const matchesSearch =
      car.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCondition =
      condition === "All" ||
      car.condition === condition;

    return matchesSearch && matchesCondition;
  });

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open Add Modal
  const handleAdd = () => {

    setEditingCar(null);

    setFormData({
      name: "",
      year: "",
      price: "",
      km: "",
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
      img: ["/images/car.jpg"],
    });

    setShowModal(true);
  };

  // Open Edit Modal
  const handleEdit = (car) => {

    setEditingCar(car);

    setFormData({
      name: car.name,
      year: car.year,
      price: car.price,
      km: car.km,
      owner: car.owner,
      condition: car.condition,
      transmission: car.transmission,
      img: car.img,
    });

    setShowModal(true);
  };

  // Save Car
  const handleSubmit = (e) => {

    e.preventDefault();

    if (editingCar) {

      setCars((prev) =>
        prev.map((car) =>
          car.id === editingCar.id
            ? {
                ...car,
                ...formData,
                year: Number(formData.year),
                price: Number(formData.price),
                km: Number(formData.km),
              }
            : car
        )
      );

    } else {

      const newCar = {
        id: Date.now(),
        ...formData,
        year: Number(formData.year),
        price: Number(formData.price),
        km: Number(formData.km),
      };

      setCars((prev) => [...prev, newCar]);
    }

    setShowModal(false);
  };

  // Delete Car
  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );

    if (!confirmDelete) return;

    setCars((prev) =>
      prev.filter((car) => car.id !== id)
    );
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <div className="container-fluid py-4 px-3 px-md-4">

      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Manage Cars
          </h2>

          <p className="text-muted mb-0">
            Add, edit and manage your vehicle inventory
          </p>
        </div>

        <button
          className="btn btn-primary mt-3 mt-md-0"
          onClick={handleAdd}
        >
          + Add New Car
        </button>

      </div>

      {/* Search & Filter */}
      <div className="card border-0 shadow-sm mb-4">

        <div className="card-body">

          <div className="row g-3">

            <div className="col-md-8">

              <input
                type="text"
                className="form-control"
                placeholder="Search car by name..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <div className="col-md-4">

              <select
                className="form-select"
                value={condition}
                onChange={(e) =>
                  setCondition(e.target.value)
                }
              >

                <option value="All">
                  All Conditions
                </option>

                <option value="Good">
                  Good
                </option>

                <option value="Accidental">
                  Accidental
                </option>

                <option value="Flooded">
                  Flooded
                </option>

              </select>

            </div>

          </div>

        </div>

      </div>

      {/* Cars Table */}
      <div className="card border-0 shadow-sm">

        <div className="card-body p-0">

          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

              <thead className="table-light">

                <tr>
                  <th className="ps-4">Car</th>
                  <th>Year</th>
                  <th>Price</th>
                  <th>KM</th>
                  <th>Owner</th>
                  <th>Condition</th>
                  <th>Transmission</th>
                  <th className="text-center">
                    Actions
                  </th>
                </tr>

              </thead>

              <tbody>

                {filteredCars.length > 0 ? (

                  filteredCars.map((car) => (

                    <tr key={car.id}>

                      <td className="ps-4">

                        <div className="d-flex align-items-center gap-3">

                          <img
                            src={car.img[0]}
                            alt={car.name}
                            style={{
                              width: "80px",
                              height: "55px",
                              objectFit: "cover",
                              borderRadius: "6px",
                            }}
                          />

                          <strong>
                            {car.name}
                          </strong>

                        </div>

                      </td>

                      <td>{car.year}</td>

                      <td className="fw-semibold">
                        {formatPrice(car.price)}
                      </td>

                      <td>
                        {car.km.toLocaleString("en-IN")} km
                      </td>

                      <td>{car.owner}</td>

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

                      <td>
                        {car.transmission}
                      </td>

                      <td>

                        <div className="d-flex justify-content-center gap-2">

                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              handleEdit(car)
                            }
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                              handleDelete(car.id)
                            }
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="8"
                      className="text-center py-5 text-muted"
                    >
                      No cars found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Add/Edit Modal */}
      {showModal && (

        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >

          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">

            <div className="modal-content">

              <div className="modal-header">

                <h5 className="modal-title fw-bold">
                  {editingCar
                    ? "Edit Car"
                    : "Add New Car"}
                </h5>

                <button
                  className="btn-close"
                  onClick={() =>
                    setShowModal(false)
                  }
                ></button>

              </div>

              <form onSubmit={handleSubmit}>

                <div className="modal-body">

                  <div className="row g-3">

                    {/* Name */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Car Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    {/* Year */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Year
                      </label>

                      <input
                        type="number"
                        name="year"
                        className="form-control"
                        value={formData.year}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    {/* Price */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Price
                      </label>

                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        value={formData.price}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    {/* KM */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Kilometers
                      </label>

                      <input
                        type="number"
                        name="km"
                        className="form-control"
                        value={formData.km}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    {/* Owner */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Owner
                      </label>

                      <select
                        name="owner"
                        className="form-select"
                        value={formData.owner}
                        onChange={handleChange}
                      >

                        <option>1st Owner</option>
                        <option>2nd Owner</option>
                        <option>3rd Owner</option>

                      </select>

                    </div>

                    {/* Condition */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Condition
                      </label>

                      <select
                        name="condition"
                        className="form-select"
                        value={formData.condition}
                        onChange={handleChange}
                      >

                        <option>Good</option>
                        <option>Accidental</option>
                        <option>Flooded</option>

                      </select>

                    </div>

                    {/* Transmission */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Transmission
                      </label>

                      <select
                        name="transmission"
                        className="form-select"
                        value={formData.transmission}
                        onChange={handleChange}
                      >

                        <option>Manual</option>
                        <option>Automatic</option>

                      </select>

                    </div>

                    {/* Image */}
                    <div className="col-md-6">

                      <label className="form-label">
                        Image URL
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={formData.img[0]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            img: [e.target.value],
                          })
                        }
                        required
                      />

                    </div>

                  </div>

                </div>

                <div className="modal-footer">

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      setShowModal(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    {editingCar
                      ? "Update Car"
                      : "Add Car"}
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ManageCars;