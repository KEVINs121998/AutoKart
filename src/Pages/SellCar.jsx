
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellCar = () => {
  const navigate = useNavigate();

  // Get logged-in user
  const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const [formData, setFormData] = useState({
    carName: "",
    year: "",
    km: "",
    owners: "",
    condition: "",
    transmission: "",
    fuelType: "",
    expectedPrice: "",
    location: "",
    description: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing sell requests
    const existingRequests =
      JSON.parse(localStorage.getItem("sellRequests")) || [];

    // Create new sell request
    const newRequest = {
      id: Date.now(),

      // Automatically get details from logged-in user
      customerName:
        loggedInUser.name ||
        loggedInUser.fullName ||
        "",

      email: loggedInUser.email || "",

      phone:
        loggedInUser.phone ||
        loggedInUser.mobile ||
        "",

      // Car details
      ...formData,

      status: "Pending",

      submittedOn: new Date().toISOString(),
    };

    // Save request
    localStorage.setItem(
      "sellRequests",
      JSON.stringify([
        ...existingRequests,
        newRequest,
      ])
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-md-7">

            <div className="card border-0 shadow-sm text-center p-5">

              <div
                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: "70px",
                  height: "70px",
                  fontSize: "32px",
                }}
              >
                ✓
              </div>

              <h2 className="fw-bold">
                Car Submitted Successfully
              </h2>

              <p className="text-muted mt-3">
                Your car selling request has been submitted.
                Our team will review your car details and
                contact you shortly.
              </p>

              <button
                className="btn btn-primary mt-3"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="container py-5">

      {/* Page Heading */}
      <div className="text-center mb-5">

        <h1 className="fw-bold">
          Sell Your Car
        </h1>

        <p className="text-muted">
          Tell us about your car and get the best value
          from AutoKart.
        </p>

      </div>

      <div className="row justify-content-center">

        <div className="col-lg-9">

          <div className="card border-0 shadow-sm">

            <div className="card-body p-4 p-md-5">

              <form onSubmit={handleSubmit}>

                <h5 className="fw-bold mb-4">
                  Car Details
                </h5>

                <div className="row">

                  {/* Car Name */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Car Name / Model
                    </label>

                    <input
                      type="text"
                      name="carName"
                      className="form-control"
                      placeholder="e.g. Honda City"
                      value={formData.carName}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* Year */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Manufacturing Year
                    </label>

                    <input
                      type="number"
                      name="year"
                      className="form-control"
                      placeholder="e.g. 2022"
                      min="1990"
                      max={new Date().getFullYear()}
                      value={formData.year}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* KM */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Kilometers Driven
                    </label>

                    <input
                      type="number"
                      name="km"
                      className="form-control"
                      placeholder="e.g. 35000"
                      min="0"
                      value={formData.km}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* Owners */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Number of Owners
                    </label>

                    <select
                      name="owners"
                      className="form-select"
                      value={formData.owners}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="1">
                        1st Owner
                      </option>

                      <option value="2">
                        2nd Owner
                      </option>

                      <option value="3">
                        3rd Owner
                      </option>

                      <option value="4+">
                        4+ Owners
                      </option>

                    </select>

                  </div>

                  {/* Condition */}
                  <div className="col-md-4 mb-3">

                    <label className="form-label">
                      Condition
                    </label>

                    <select
                      name="condition"
                      className="form-select"
                      value={formData.condition}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="Excellent">
                        Excellent
                      </option>

                      <option value="Good">
                        Good
                      </option>

                      <option value="Average">
                        Average
                      </option>

                      <option value="Accidental">
                        Accidental
                      </option>

                      <option value="Flooded">
                        Flooded
                      </option>

                    </select>

                  </div>

                  {/* Transmission */}
                  <div className="col-md-4 mb-3">

                    <label className="form-label">
                      Transmission
                    </label>

                    <select
                      name="transmission"
                      className="form-select"
                      value={formData.transmission}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="Manual">
                        Manual
                      </option>

                      <option value="Automatic">
                        Automatic
                      </option>

                    </select>

                  </div>

                  {/* Fuel */}
                  <div className="col-md-4 mb-3">

                    <label className="form-label">
                      Fuel Type
                    </label>

                    <select
                      name="fuelType"
                      className="form-select"
                      value={formData.fuelType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select
                      </option>

                      <option value="Petrol">
                        Petrol
                      </option>

                      <option value="Diesel">
                        Diesel
                      </option>

                      <option value="CNG">
                        CNG
                      </option>

                      <option value="Electric">
                        Electric
                      </option>

                      <option value="Hybrid">
                        Hybrid
                      </option>

                    </select>

                  </div>

                  {/* Expected Price */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Expected Price
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        ₹
                      </span>

                      <input
                        type="number"
                        name="expectedPrice"
                        className="form-control"
                        placeholder="e.g. 850000"
                        min="0"
                        value={formData.expectedPrice}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                  {/* Location */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Car Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="e.g. Mumbai"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

                {/* Description */}
                <div className="mb-3">

                  <label className="form-label">
                    Description
                  </label>

                  <textarea
                    name="description"
                    className="form-control"
                    rows="4"
                    placeholder="Tell us anything important about your car..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                {/* Image */}
                <div className="mb-4">

                  <label className="form-label">
                    Car Image
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />

                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Car Preview"
                      className="img-fluid rounded mt-3"
                      style={{
                        maxHeight: "250px",
                        objectFit: "cover",
                      }}
                    />
                  )}

                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Submit Car for Sale
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SellCar;
