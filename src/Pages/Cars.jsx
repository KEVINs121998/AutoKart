import React, { useState } from "react";
import cars from "../data/cars";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 8;

  // Get unique years
  const years = [...new Set(cars.map((car) => car.year))].sort(
    (a, b) => b - a
  );

  // Search + Filter
  let filteredCars = cars.filter((car) => {

    const matchesSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesYear =
      yearFilter === "all" ||
      car.year === Number(yearFilter);

    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "under5" && car.price < 500000) ||
      (priceFilter === "5to10" &&
        car.price >= 500000 &&
        car.price <= 1000000) ||
      (priceFilter === "10to15" &&
        car.price > 1000000 &&
        car.price <= 1500000) ||
      (priceFilter === "above15" && car.price > 1500000);

    return matchesSearch && matchesYear && matchesPrice;
  });


  // Sorting
  if (sort === "priceLow") {
    filteredCars.sort((a, b) => a.price - b.price);
  }

  if (sort === "priceHigh") {
    filteredCars.sort((a, b) => b.price - a.price);
  }

  if (sort === "newest") {
    filteredCars.sort((a, b) => b.year - a.year);
  }

  if (sort === "oldest") {
    filteredCars.sort((a, b) => a.year - b.year);
  }


  // Pagination
  const totalPages = Math.ceil(
    filteredCars.length / carsPerPage
  );

  const startIndex =
    (currentPage - 1) * carsPerPage;

  const currentCars = filteredCars.slice(
    startIndex,
    startIndex + carsPerPage
  );


  // Search
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };


  // Filter
  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
    setCurrentPage(1);
  };


  const handleYearFilter = (e) => {
    setYearFilter(e.target.value);
    setCurrentPage(1);
  };


  // Sort
  const handleSort = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };


  // Reset
  const resetFilters = () => {
    setSearch("");
    setPriceFilter("all");
    setYearFilter("all");
    setSort("default");
    setCurrentPage(1);
  };


  return (
    <>

      <div className="container py-5">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Our Cars
          </h2>

          <h5 className="text-muted">
            Find the perfect pre-owned car for you.
          </h5>

        </div>


        {/* ================= SEARCH & FILTER ================= */}

        <div className="card border-0 shadow-sm rounded-4 mb-5">

          <div className="card-body p-4">

            <div className="row g-3">

              {/* Search */}

              <div className="col-lg-4">

                <label className="form-label fw-semibold">
                  Search
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search car name..."
                  value={search}
                  onChange={handleSearch}
                />

              </div>


              {/* Price */}

              <div className="col-lg-3">

                <label className="form-label fw-semibold">
                  Price
                </label>

                <select
                  className="form-select"
                  value={priceFilter}
                  onChange={handlePriceFilter}
                >

                  <option value="all">
                    All Prices
                  </option>

                  <option value="under5">
                    Under ₹5 Lakh
                  </option>

                  <option value="5to10">
                    ₹5 - ₹10 Lakh
                  </option>

                  <option value="10to15">
                    ₹10 - ₹15 Lakh
                  </option>

                  <option value="above15">
                    Above ₹15 Lakh
                  </option>

                </select>

              </div>


              {/* Year */}

              <div className="col-lg-2">

                <label className="form-label fw-semibold">
                  Year
                </label>

                <select
                  className="form-select"
                  value={yearFilter}
                  onChange={handleYearFilter}
                >

                  <option value="all">
                    All Years
                  </option>

                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}

                </select>

              </div>


              {/* Sort */}

              <div className="col-lg-3">

                <label className="form-label fw-semibold">
                  Sort By
                </label>

                <select
                  className="form-select"
                  value={sort}
                  onChange={handleSort}
                >

                  <option value="default">
                    Default
                  </option>

                  <option value="priceLow">
                    Price: Low to High
                  </option>

                  <option value="priceHigh">
                    Price: High to Low
                  </option>

                  <option value="newest">
                    Year: Newest First
                  </option>

                  <option value="oldest">
                    Year: Oldest First
                  </option>

                </select>

              </div>

            </div>


            {/* Reset */}

            <div className="text-end mt-3">

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={resetFilters}
              >
                Reset Filters
              </button>

            </div>

          </div>

        </div>


        {/* ================= RESULT COUNT ================= */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <p className="text-muted mb-0">
            Showing{" "}
            <strong>
              {filteredCars.length}
            </strong>{" "}
            cars
          </p>

        </div>


        {/* ================= CAR GRID ================= */}

        <div className="row g-4">

          {currentCars.map((car) => (

            <div
              key={car.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >

              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden car-card">

                <img
                  src={car.img[0]}
                  className="card-img-top"
                  alt={car.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />


                <div className="card-body text-center d-flex flex-column">

                  <h5 className="fw-bold mb-2">
                    {car.name}
                  </h5>

                  <p className="text-muted mb-2">
                    {car.year}
                  </p>

                  <h5 className="fw-bold text-primary mb-3">
                    ₹{car.price.toLocaleString()}
                  </h5>

                  <button
                    className="btn btn-primary w-100 mt-auto"
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


        {/* ================= NO RESULTS ================= */}

        {filteredCars.length === 0 && (

          <div className="text-center py-5">

            <h5 className="fw-bold">
              No cars found
            </h5>

            <p className="text-muted">
              Try changing your search or filters.
            </p>

          </div>

        )}


        {/* ================= PAGINATION ================= */}

        {totalPages > 1 && (

          <nav className="mt-5">

            <ul className="pagination justify-content-center">

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <li
                  key={page}
                  className={`page-item ${
                    currentPage === page
                      ? "active"
                      : ""
                  }`}
                >

                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage(page)
                    }
                  >
                    {page}
                  </button>

                </li>

              ))}

            </ul>

          </nav>

        )}

      </div>

    </>
  );
};

export default Cars;