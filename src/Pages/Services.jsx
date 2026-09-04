import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🔧",
      title: "General Car Service",
      description:
        "Complete inspection and servicing of your car including engine oil, filters and basic checks.",
      price: 1499,
    },
    {
      icon: "🛢️",
      title: "Oil Change",
      description:
        "Engine oil replacement with oil filter inspection and replacement.",
      price: 999,
    },
    {
      icon: "❄️",
      title: "AC Service",
      description:
        "Complete AC inspection, cleaning and performance check for better cooling.",
      price: 1299,
    },
    {
      icon: "🛞",
      title: "Wheel Alignment",
      description:
        "Computerized wheel alignment to improve tyre life and driving stability.",
      price: 699,
    },
    {
      icon: "🧼",
      title: "Car Detailing",
      description:
        "Interior and exterior cleaning to restore your car's fresh and premium look.",
      price: 2499,
    },
    {
      icon: "🔋",
      title: "Battery Check",
      description:
        "Battery health inspection, charging check and electrical system diagnosis.",
      price: 499,
    },
    {
      icon: "🛠️",
      title: "Brake Service",
      description:
        "Brake inspection and servicing to ensure safe and reliable braking.",
      price: 999,
    },
    {
      icon: "✨",
      title: "Full Car Inspection",
      description:
        "Detailed inspection of engine, brakes, suspension, tyres and electrical systems.",
      price: 799,
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center py-4">
          <h1 className="display-5 fw-bold">
            Our Services
          </h1>

          <p className="lead text-white-50 mb-0">
            Professional car services at affordable prices
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              What We Offer
            </h2>

            <p className="text-muted">
              Keep your car in the best condition with our trusted services.
            </p>
          </div>

          <div className="row g-4">

            {services.map((service, index) => (
              <div className="col-md-6 col-lg-3" key={index}>

                <div className="card h-100 border-0 shadow-sm">

                  <div className="card-body text-center p-4">

                    <div
                      className="bg-primary bg-opacity-10 rounded-circle
                      d-flex align-items-center justify-content-center
                      mx-auto mb-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        fontSize: "32px",
                      }}
                    >
                      {service.icon}
                    </div>

                    <h5 className="fw-bold">
                      {service.title}
                    </h5>

                    <p className="text-muted small">
                      {service.description}
                    </p>

                    <h4 className="fw-bold text-primary mt-3">
                      ₹{service.price.toLocaleString()}
                    </h4>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


    </div>
  );
};

export default Services;