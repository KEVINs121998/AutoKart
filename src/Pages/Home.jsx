
import { useNavigate } from "react-router-dom";
import cars from "../data/cars";
import "../Css/Home.css";

const Home = () => {
  const navigate = useNavigate();

  // Show only 8 cars on Home page
  const featuredCars = cars.slice(0, 8);

  return (
    <>
      {/* ================= CAROUSEL ================= */}
      <div
        id="homeCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
         data-bs-interval="3000"
      >

        {/* Indicators */}
        <div className="carousel-indicators">

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
          ></button>

        </div>

        {/* Slides */}
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://mediapool.bmwgroup.com/cache/P9/202504/P90595422/P90595422-retail-next-showroom-04-2025-2522px.jpg"
              className="d-block w-100"
              alt="Premium Cars"
            />

            <div className="carousel-caption">
              <h1 className="fw-bold">
               Your Trusted Pre-Owned Car Dealer
              </h1>

              <p>
                 We offer a carefully selected range of quality pre-owned cars.
            Our goal is to make buying your next car simple, transparent
            and hassle-free.
              </p>

              <button
                className="btn btn-primary"
                onClick={() => navigate("/cars")}
              >
                Explore Cars
              </button>
            </div>
          </div>


          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1692406069831-0bb7ea297645?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2hvd3Jvb218ZW58MHx8MHx8fDA%3D"
              className="d-block w-100"
              alt="Quality Used Cars"
            />

            <div className="carousel-caption">
              <h1 className="fw-bold">
                Quality You Can Trust
              </h1>

              <p>
                Every car is carefully inspected before sale
              </p>

              <button
                className="btn btn-primary"
                onClick={() => navigate("/cars")}
              >
                View Cars
              </button>
            </div>
          </div>


          <div className="carousel-item">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/057/502/538/small/modern-luxury-cars-displayed-in-a-bright-dealership-showroom-free-photo.jpg"
              className="d-block w-100"
              alt="Best Car Deals"
            />

            <div className="carousel-caption">
              <h1 className="fw-bold">
                Great Cars. Great Deals.
              </h1>

              <p>
                Drive home your dream car today
              </p>

              <button
                className="btn btn-primary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>


        {/* Previous */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>


        {/* Next */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>


      {/* ================= FEATURED CARS ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Featured Cars
            </h2>

            <p className="text-muted">
              Explore some of our latest available cars
            </p>

          </div>


          <div className="row g-4">

            {featuredCars.map((car) => (

              <div
                key={car.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >

                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden home-car-card">

                  {/* Image */}
                  <img
                    src={car.img[0]}
                    className="card-img-top"
                    alt={car.name}
                    style={{
                      height: "190px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Details */}
                  <div className="card-body text-center">

                    <h5 className="fw-bold mb-2">
                      {car.name}
                    </h5>

                    <p className="text-muted mb-2">
                      {car.year}
                    </p>

                    <h5 className="text-primary fw-bold mb-3">
                      ₹{car.price.toLocaleString()}
                    </h5>

                    <button
                      className="btn btn-primary w-100"
                      onClick={() =>
                        navigate(`/cardetails/${car.id}`)
                      }
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* View All */}
          <div className="text-center mt-5">

            <button
              className="btn btn-outline-primary px-4"
              onClick={() => navigate("/cars")}
            >
              View All Cars
            </button>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-5 bg-dark text-white">

        <div className="container text-center">

          <h2 className="fw-bold mb-3">
            Looking For Your Next Car?
          </h2>

          <p className="mb-4">
            Visit us or get in touch with our team today.
          </p>

          <button
            className="btn btn-light px-4"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>

        </div>

      </section>

    </>
  );
};

export default Home;