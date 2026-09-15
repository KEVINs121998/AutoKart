import { useState } from "react";

const ManageSellRequests = () => {
  const [requests, setRequests] = useState(() => {
    return JSON.parse(localStorage.getItem("sellRequests")) || [];
  });

  const handleStatus = (id, status) => {
    const updatedRequests = requests.map((request) =>
      request.id === id
        ? { ...request, status }
        : request
    );

    setRequests(updatedRequests);

    localStorage.setItem(
      "sellRequests",
      JSON.stringify(updatedRequests)
    );
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) {
      return;
    }

    const updatedRequests = requests.filter(
      (request) => request.id !== id
    );

    setRequests(updatedRequests);

    localStorage.setItem(
      "sellRequests",
      JSON.stringify(updatedRequests)
    );
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Manage Sell Requests</h2>

      {requests.length === 0 ? (
        <div className="alert alert-info">
          No sell requests available.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Car</th>
                <th>Seller</th>
                <th>Contact</th>
                <th>Details</th>
                <th>Expected Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  {/* Car */}
                  <td>
                    {request.image && (
                      <img
                        src={request.image}
                        alt={request.carName}
                        width="120"
                        height="75"
                        className="rounded mb-2"
                        style={{ objectFit: "cover" }}
                      />
                    )}

                    <div className="fw-bold">
                      {request.carName}
                    </div>

                    <small className="text-muted">
                      {request.year}
                    </small>
                  </td>

                  {/* Seller */}
                  <td>
                    <strong>
                      {request.customerName}
                    </strong>

                    <br />

                    <small>
                      {request.email}
                    </small>
                  </td>

                  {/* Contact */}
                  <td>
                    {request.phone || "N/A"}
                    <br />
                    <small>
                      {request.location}
                    </small>
                  </td>

                  {/* Car Details */}
                  <td>
                    <div>
                      <strong>KM:</strong> {request.km}
                    </div>

                    <div>
                      <strong>Owners:</strong>{" "}
                      {request.owners}
                    </div>

                    <div>
                      <strong>Condition:</strong>{" "}
                      {request.condition}
                    </div>

                    <div>
                      <strong>Transmission:</strong>{" "}
                      {request.transmission}
                    </div>

                    <div>
                      <strong>Fuel:</strong>{" "}
                      {request.fuelType}
                    </div>
                  </td>

                  {/* Price */}
                  <td>
                    ₹{Number(request.expectedPrice).toLocaleString(
                      "en-IN"
                    )}
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`badge ${
                        request.status === "Approved"
                          ? "bg-success"
                          : request.status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="d-flex flex-column gap-2">

                      {request.status === "Pending" && (
                        <>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              handleStatus(
                                request.id,
                                "Approved"
                              )
                            }
                          >
                            Approve
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleStatus(
                                request.id,
                                "Rejected"
                              )
                            }
                          >
                            Reject
                          </button>
                        </>
                      )}

                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          handleDelete(request.id)
                        }
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageSellRequests;