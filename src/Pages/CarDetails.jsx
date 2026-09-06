import { useParams } from "react-router-dom";
import cars from '../data/cars'
import { useInventory } from "../Context/InventoryContext";

const CarDetails = () => {
  const { addToInventory } = useInventory();
const {id}=useParams()

const car= cars.find((car)=>car.id===Number(id))

  if (!car) {
    return (
      <div className="container text-center py-5">
        <h2>Car not found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="row g-5">

        {/* LEFT - IMAGE CAROUSEL */}
        <div className="col-lg-6">

          <div
            id="carCarousel"
            className="carousel slide shadow rounded overflow-hidden"
            data-bs-ride="carousel"
          >

            {/* Indicators */}
            <div className="carousel-indicators">
              {car.img.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></button>
              ))}
            </div>

            {/* Images */}
            <div className="carousel-inner">

              {car.img.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={car.name}
                    style={{
                      height: "450px",
                      objectFit: "cover"
                    }}
                  />
                </div>
              ))}

            </div>

            {/* Previous */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            {/* Next */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>

        </div>

        {/* RIGHT - CAR DETAILS */}
        <div className="col-lg-6">

          <div className="card border-0">

            <div className="card-body">

              <h1 className="fw-bold mb-2">
                {car.name}
              </h1>

              <p className="text-muted mb-4">
                {car.year} • {car.km.toLocaleString()} km • {car.owner}
              </p>

              <h2 className="fw-bold text-primary mb-4">
                ₹{car.price.toLocaleString()}
              </h2>

              <hr />

              {/* Details */}
              <h5 className="fw-bold mt-4 mb-3">
                Car Details
              </h5>

              <div className="row g-3">

                <div className="col-6">
                  <div className="bg-light rounded p-3">
                    <small className="text-muted d-block">
                      Year
                    </small>
                    <strong>{car.year}</strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bg-light rounded p-3">
                    <small className="text-muted d-block">
                      Kilometers
                    </small>
                    <strong>
                      {car.km.toLocaleString()} km
                    </strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bg-light rounded p-3">
                    <small className="text-muted d-block">
                      Owner
                    </small>
                    <strong>{car.owner}</strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bg-light rounded p-3">
                    <small className="text-muted d-block">
                      Condition
                    </small>
                    <strong>{car.condition}</strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bg-light rounded p-3">
                    <small className="text-muted d-block">
                      Fuel
                    </small>
                    <strong>{car.fuel}</strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bg-light rounded p-3">
                    <small className="text-muted d-block">
                      Transmission
                    </small>
                    <strong>{car.transmission}</strong>
                  </div>
                </div>

              </div>

              {/* Button */}
              <button className="btn btn-primary btn-lg w-100 mt-4"
              onClick={() => addToInventory(car)}>
                Add to Inventory
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CarDetails;
