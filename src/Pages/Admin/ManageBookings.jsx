import { useState } from "react";
import bookingsData from "../../data/bookings";

const ManageBookings = () => {
  const [bookings, setBookings] = useState(bookingsData);
  const [search, setSearch] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customerName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      booking.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      booking.carName
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      setBookings((prev) =>
        prev.filter((booking) => booking.id !== id)
      );
    }
  };

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Manage Bookings</h2>
          <p className="text-muted mb-0">
            View and manage customer bookings
          </p>
        </div>

        <span className="badge bg-primary fs-6">
          Total Bookings: {bookings.length}
        </span>
      </div>

      {/* Search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Search by customer, email or car..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Bookings Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">

          <div className="table-responsive">
            <table className="table table-hover align-middle">

              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Car</th>
                  <th>Booking Date</th>
                  <th>Amount</th>
                  <th>Booked On</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking, index) => (
                    <tr key={booking.id}>

                      <td>{index + 1}</td>

                      <td>
                        <strong>{booking.customerName}</strong>
                        <br />

                        <small className="text-muted">
                          {booking.email}
                        </small>

                        <br />

                        <small className="text-muted">
                          {booking.phone}
                        </small>
                      </td>

                      <td>
                        <strong>{booking.carName}</strong>
                      </td>

                      <td>
                        {booking.bookingDate}
                      </td>

                      <td>
                        <strong>
                          {formatPrice(booking.amount)}
                        </strong>
                      </td>

                      <td>
                        {booking.createdAt}
                      </td>

                      <td>
                        <div className="d-flex gap-2">

                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              setSelectedBooking(booking)
                            }
                          >
                            View
                          </button>

                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                              handleDelete(booking.id)
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
                      colSpan="7"
                      className="text-center py-5 text-muted"
                    >
                      No bookings found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

        </div>
      </div>

      {/* View Booking Modal */}
      {selectedBooking && (
        <div
          className="modal fade show d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title">
                  Booking Details
                </h5>

                <button
                  className="btn-close"
                  onClick={() => setSelectedBooking(null)}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">

                <h6 className="fw-bold">
                  Customer Information
                </h6>

                <p className="mb-1">
                  <strong>Name:</strong>{" "}
                  {selectedBooking.customerName}
                </p>

                <p className="mb-1">
                  <strong>Email:</strong>{" "}
                  {selectedBooking.email}
                </p>

                <p className="mb-3">
                  <strong>Phone:</strong>{" "}
                  {selectedBooking.phone}
                </p>

                <hr />

                <h6 className="fw-bold">
                  Vehicle Information
                </h6>

                <p className="mb-3">
                  <strong>Car:</strong>{" "}
                  {selectedBooking.carName}
                </p>

                <hr />

                <h6 className="fw-bold">
                  Booking Information
                </h6>

                <p className="mb-1">
                  <strong>Booking Date:</strong>{" "}
                  {selectedBooking.bookingDate}
                </p>

                <p className="mb-1">
                  <strong>Amount:</strong>{" "}
                  {formatPrice(selectedBooking.amount)}
                </p>

                <p className="mb-0">
                  <strong>Booked On:</strong>{" "}
                  {selectedBooking.createdAt}
                </p>

              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedBooking(null)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageBookings;