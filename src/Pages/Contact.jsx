import React from "react";
import "../Css/Contact.css";

const Contact = () => {
  return (
    <div className="container py-5">

      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          Get in touch with us for any questions or enquiries
        </p>
      </div>

      <div className="row g-5">

        {/* Showroom Details */}
        <div className="col-md-6">

          <h3 className="fw-bold mb-4">
            Visit Our Showroom
          </h3>

          <p>
            We are always happy to help you find the right car.
            Visit our showroom or contact us using the details below.
          </p>

          <div className="mt-4">

            <h5 className="fw-bold">📍 Address</h5>
            <p className="text-muted">
              AutoKart Cars,<br />
              Link Road, Andheri West,<br />
              Mumbai, Maharashtra - 400053
            </p>

            <h5 className="fw-bold mt-4">📞 Phone</h5>
            <p className="text-muted">
              +91 98765 43210
            </p>

            <h5 className="fw-bold mt-4">✉️ Email</h5>
            <p className="text-muted">
              contact@AutoKart.com
            </p>

            <h5 className="fw-bold mt-4">🕒 Opening Hours</h5>
            <p className="text-muted">
              Monday - Saturday: 9:00 AM - 8:00 PM<br />
              Sunday: 10:00 AM - 6:00 PM
            </p>

          </div>

        </div>

        {/* Contact Form */}
        <div className="col-md-6">

          <div className="contact-form">

            <h3 className="fw-bold mb-4">
              Send Us a Message
            </h3>

            <form>

              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;