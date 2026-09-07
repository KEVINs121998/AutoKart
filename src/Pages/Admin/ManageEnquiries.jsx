import React, { useState } from "react";
import enquiriesData from "../../data/enquiries";

const ManageEnquiries = () => {
  const [enquiries, setEnquiries] =
    useState(enquiriesData);

  const [search, setSearch] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] =
    useState(null);

  const filteredEnquiries = enquiries.filter(
    (enquiry) =>
      enquiry.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      enquiry.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      enquiry.subject
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const updateStatus = (id, status) => {
    setEnquiries((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    setEnquiries((prev) =>
      prev.filter((item) => item.id !== id)
    );

    setSelectedEnquiry(null);
  };

  return (
    <div className="container-fluid py-4 px-3 px-md-4">

      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Manage Enquiries
          </h2>

          <p className="text-muted mb-0">
            View and manage customer enquiries
          </p>
        </div>

        <div className="mt-3 mt-md-0">
          <span className="badge text-bg-primary fs-6">
            {enquiries.length} Enquiries
          </span>
        </div>

      </div>

      {/* Statistics */}
      <div className="row g-3 mb-4">

        <div className="col-12 col-sm-4">

          <div className="card border-0 shadow-sm">
            <div className="card-body">

              <p className="text-muted mb-1">
                Total Enquiries
              </p>

              <h3 className="fw-bold mb-0">
                {enquiries.length}
              </h3>

            </div>
          </div>

        </div>

        <div className="col-12 col-sm-4">

          <div className="card border-0 shadow-sm">
            <div className="card-body">

              <p className="text-muted mb-1">
                New
              </p>

              <h3 className="fw-bold text-primary mb-0">
                {
                  enquiries.filter(
                    (item) => item.status === "New"
                  ).length
                }
              </h3>

            </div>
          </div>

        </div>

        <div className="col-12 col-sm-4">

          <div className="card border-0 shadow-sm">
            <div className="card-body">

              <p className="text-muted mb-1">
                Replied
              </p>

              <h3 className="fw-bold text-success mb-0">
                {
                  enquiries.filter(
                    (item) => item.status === "Replied"
                  ).length
                }
              </h3>

            </div>
          </div>

        </div>

      </div>

      {/* Search */}
      <div className="card border-0 shadow-sm mb-4">

        <div className="card-body">

          <input
            type="text"
            className="form-control"
            placeholder="Search by name, email or subject..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* Enquiries Table */}
      <div className="card border-0 shadow-sm">

        <div className="card-body p-0">

          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

              <thead className="table-light">

                <tr>
                  <th className="ps-4">Customer</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-center">
                    Actions
                  </th>
                </tr>

              </thead>

              <tbody>

                {filteredEnquiries.length > 0 ? (

                  filteredEnquiries.map((enquiry) => (

                    <tr key={enquiry.id}>

                      <td className="ps-4">

                        <div>
                          <div className="fw-semibold">
                            {enquiry.name}
                          </div>

                          <small className="text-muted">
                            {enquiry.email}
                          </small>
                        </div>

                      </td>

                      <td>
                        {enquiry.subject}
                      </td>

                      <td>
                        {enquiry.date}
                      </td>

                      <td>

                        <span
                          className={`badge ${
                            enquiry.status === "New"
                              ? "text-bg-primary"
                              : enquiry.status === "Read"
                              ? "text-bg-secondary"
                              : "text-bg-success"
                          }`}
                        >
                          {enquiry.status}
                        </span>

                      </td>

                      <td>

                        <div className="d-flex justify-content-center gap-2">

                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              setSelectedEnquiry(
                                enquiry
                              )
                            }
                          >
                            View
                          </button>

                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                              handleDelete(
                                enquiry.id
                              )
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
                      colSpan="5"
                      className="text-center py-5 text-muted"
                    >
                      No enquiries found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* View Enquiry Modal */}
      {selectedEnquiry && (

        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >

          <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content">

              <div className="modal-header">

                <h5 className="modal-title fw-bold">
                  Enquiry Details
                </h5>

                <button
                  className="btn-close"
                  onClick={() =>
                    setSelectedEnquiry(null)
                  }
                />

              </div>

              <div className="modal-body">

                <div className="mb-3">
                  <small className="text-muted">
                    Customer
                  </small>

                  <h6 className="fw-bold">
                    {selectedEnquiry.name}
                  </h6>
                </div>

                <div className="mb-3">
                  <small className="text-muted">
                    Email
                  </small>

                  <p className="mb-0">
                    {selectedEnquiry.email}
                  </p>
                </div>

                <div className="mb-3">
                  <small className="text-muted">
                    Phone
                  </small>

                  <p className="mb-0">
                    {selectedEnquiry.phone}
                  </p>
                </div>

                <div className="mb-3">
                  <small className="text-muted">
                    Subject
                  </small>

                  <p className="mb-0 fw-semibold">
                    {selectedEnquiry.subject}
                  </p>
                </div>

                <div className="mb-3">
                  <small className="text-muted">
                    Message
                  </small>

                  <div className="bg-light p-3 rounded">
                    {selectedEnquiry.message}
                  </div>
                </div>

                <div>
                  <small className="text-muted">
                    Status
                  </small>

                  <select
                    className="form-select mt-1"
                    value={selectedEnquiry.status}
                    onChange={(e) => {

                      updateStatus(
                        selectedEnquiry.id,
                        e.target.value
                      );

                      setSelectedEnquiry({
                        ...selectedEnquiry,
                        status: e.target.value,
                      });

                    }}
                  >
                    <option>New</option>
                    <option>Read</option>
                    <option>Replied</option>
                  </select>
                </div>

              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    setSelectedEnquiry(null)
                  }
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

export default ManageEnquiries;