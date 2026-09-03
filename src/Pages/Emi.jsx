import React, { useState } from "react";
import "../Css/Emi.css";

const Emi = () => {
  const [loanAmount, setLoanAmount] = useState(1800000);
  const [interestRate, setInterestRate] = useState(11);
  const [tenure, setTenure] = useState(60);

  const [result, setResult] = useState({
    emi: 0,
    totalInterest: 0,
    totalPayment: 0,
  });

  const calculateEMI = () => {
    const principal = Number(loanAmount);
  
    const rate = Number(interestRate) / 12 / 100;
    const months = Number(tenure);

    if (!principal || !months) return;

    let emi;

    if (rate === 0) {
      emi = principal / months;
    } else {
      emi =
        (principal *
          rate *
          Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
    }

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    setResult({
      emi,
      totalInterest,
      totalPayment,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0, 
    }).format(amount);
  };

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Car Loan EMI Calculator</h1>

        <p className="text-muted">
          Calculate your monthly car loan EMI easily
        </p>
      </div>

      <div className="row justify-content-center g-4">

        {/* LEFT - CALCULATOR */}
        <div className="col-lg-6">

          <div className="emi-card">

            <h3 className="fw-bold mb-4">
              Calculate Your EMI
            </h3>

            {/* Loan Amount */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Loan Amount
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  ₹
                </span>

                <input
                  type="number"
                  className="form-control"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(e.target.value)
                  }
                />

              </div>

            </div>

            {/* Interest */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Interest Rate (% per year)
              </label>

              <div className="input-group">

                <input
                  type="number"
                  className="form-control"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(e.target.value)
                  }
                  step="0.1"
                />

                <span className="input-group-text">
                  %
                </span>

              </div>

            </div>

            {/* Tenure */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Loan Tenure
              </label>

              <select
                className="form-select"
                value={tenure}
                onChange={(e) =>
                  setTenure(e.target.value)
                }
              >

                <option value="12">1 Year</option>
                <option value="24">2 Years</option>
                <option value="36">3 Years</option>
                <option value="48">4 Years</option>
                <option value="60">5 Years</option>
                <option value="72">6 Years</option>
                <option value="84">7 Years</option>

              </select>

            </div>

            <button
              className="btn btn-primary w-100"
              onClick={calculateEMI}
            >
              Calculate EMI
            </button>

          </div>

        </div>

        {/* RIGHT - RESULT */}
        <div className="col-lg-6">

          <div className="result-card">

            <h3 className="fw-bold mb-4">
              EMI Details
            </h3>

            {/* Monthly EMI */}
            <div className="result-item">

              <p className="text-muted mb-1">
                Monthly EMI
              </p>

              <h2 className="fw-bold text-primary">
                {result.emi
                  ? formatCurrency(result.emi)
                  : "₹0"}
              </h2>

            </div>

            <hr />

            {/* Interest */}
            <div className="result-item">

              <p className="text-muted mb-1">
                Total Interest
              </p>

              <h4 className="fw-bold">
                {result.totalInterest
                  ? formatCurrency(result.totalInterest)
                  : "₹0"}
              </h4>

            </div>

            <hr />

            {/* Total */}
            <div className="result-item">

              <p className="text-muted mb-1">
                Total Payment
              </p>

              <h4 className="fw-bold">
                {result.totalPayment
                  ? formatCurrency(result.totalPayment)
                  : "₹0"}
              </h4>

            </div>

            <hr />

            {/* Summary */}
            <div className="loan-summary">

              <div className="d-flex justify-content-between">
                <span>Loan Amount</span>
                <strong>
                  {formatCurrency(loanAmount)}
                </strong>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Interest Rate</span>
                <strong>
                  {interestRate}%
                </strong>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Tenure</span>
                <strong>
                  {tenure} Months
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Emi;