import { useInventory } from "../Context/InventoryContext";
import { Link, useNavigate } from "react-router-dom";

const Inventory = () => {
  const { inventory, removeFromInventory } = useInventory();
  const navigate = useNavigate();

  // Calculate total amount
  const totalAmount = inventory.reduce(
    (total, car) => total + car.price,
    0
  );

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold">My Inventory</h1>
          <p className="text-muted">
            Cars added to your inventory
          </p>
        </div>

        <span className="badge bg-primary fs-6">
          {inventory.length} Cars
        </span>
      </div>

      {inventory.length === 0 ? (

        /* Empty Inventory */
        <div className="text-center py-5">

          <h3 className="fw-bold">
            Your inventory is empty
          </h3>

          <p className="text-muted">
            Add cars from the car details page.
          </p>

          <Link to="/cars" className="btn btn-primary">
            Browse Cars
          </Link>

        </div>

      ) : (

        <>
          {/* Cars */}
          <div className="row g-4">

            {inventory.map((car) => (

              <div
                className="col-lg-3 col-md-6"
                key={car.id}
              >

                <div className="card h-100 shadow-sm border-0">

                  <img
                    src={car.img[0]}
                    className="card-img-top"
                    alt={car.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">

                    <h5 className="fw-bold">
                      {car.name}
                    </h5>

                    <p className="text-muted mb-2">
                      {car.year} •{" "}
                      {car.km.toLocaleString()} km
                    </p>

                    <h5 className="text-primary fw-bold">
                      ₹{car.price.toLocaleString()}
                    </h5>

                    <div className="d-flex gap-2 mt-3">

                      <Link
                        to={`/cardetails/${car.id}`}
                        className="btn btn-outline-primary flex-grow-1"
                      >
                        View
                      </Link>

                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          removeFromInventory(car.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Total Section */}
          <div className="card shadow-sm border-0 mt-5">

            <div className="card-body">

              <div className="row align-items-center">

                <div className="col-md-8">
                  <h5 className="text-muted mb-1">
                    Total Inventory Value
                  </h5>

                  <h2 className="fw-bold text-primary mb-0">
                    ₹{totalAmount.toLocaleString()}
                  </h2>

                  <small className="text-muted">
                    Total for {inventory.length} car
                    {inventory.length > 1 ? "s" : ""}
                  </small>
                </div>

                <div className="col-md-4 mt-3 mt-md-0">

                  <button
                    className="btn btn-success btn-lg w-100"
                    onClick={() => navigate("/payment")}
                  >
                    Proceed to Payment
                  </button>

                </div>

              </div>

            </div>

          </div>
        </>

      )}

    </div>
  );
};

export default Inventory;