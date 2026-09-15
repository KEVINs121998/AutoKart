import { useInventory } from "../Context/InventoryContext";
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
 const { inventory, setInventory } = useInventory();
  const navigate = useNavigate();

  const totalAmount = inventory.reduce(
    (total, car) => total + car.price,
    0
  );
const handlePayment = () => {
  const today = new Date().toISOString().split("T")[0];

  // Get currently logged-in user
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  // Get existing bookings
  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // Create booking using actual user details
  const newBookings = inventory.map((car) => ({
    id: Date.now() + car.id,
    customerName: loggedInUser.name,
    email: loggedInUser.email,
    phone: loggedInUser.pno,
    carName: car.name,
    bookingDate: today,
    amount: car.price,
    createdAt: today,
  }));

  // Save booking
  localStorage.setItem(
    "bookings",
    JSON.stringify([
      ...existingBookings,
      ...newBookings,
    ])
  );

  // Empty inventory
  setInventory([]);

  // Go home
  navigate("/");
};

  if (inventory.length === 0) {
    return (
      <div className="container text-center py-5">
        <h2 className="fw-bold">
          No Cars Selected
        </h2>

        <p className="text-muted">
          Please add a car to your inventory first.
        </p>

        <Link to="/cars" className="btn btn-primary">
          Browse Cars
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-7">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              <h2 className="fw-bold mb-4">
                Payment
              </h2>

              <h5 className="fw-bold mb-3">
                Selected Cars
              </h5>

              {inventory.map((car) => (
                <div
                  key={car.id}
                  className="d-flex justify-content-between border-bottom py-3"
                >
                  <div>
                    <strong>{car.name}</strong>

                    <small className="text-muted d-block">
                      {car.year}
                    </small>
                  </div>

                  <strong>
                    ₹{car.price.toLocaleString("en-IN")}
                  </strong>
                </div>
              ))}

              <div className="d-flex justify-content-between mt-4">

                <h5 className="fw-bold">
                  Total Amount
                </h5>

                <h4 className="fw-bold text-primary">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </h4>

              </div>

              <hr />

              <h5 className="fw-bold mb-3">
                Payment Details
              </h5>

              <div className="mb-3">
                <label className="form-label">
                  Card Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="row">

                <div className="col-6 mb-3">
                  <label className="form-label">
                    Expiry Date
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                  />
                </div>

                <div className="col-6 mb-3">
                  <label className="form-label">
                    CVV
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>

              </div>

              <button
                className="btn btn-success btn-lg w-100 mt-2"
                onClick={handlePayment}
              >
                Pay ₹{totalAmount.toLocaleString("en-IN")}
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Payment;