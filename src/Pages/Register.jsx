import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Css/Register.css";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  return (
    <div className="register-page">
      {/* Left Side */}
      <div className="register-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="brand">
            <span className="brand-icon">🏎️ </span>
            <span>AutoKart</span>
          </div>

          <div className="hero-text">
            <p className="hero-small-title">YOUR NEXT CAR STARTS HERE</p>

            <h1>
              Find. Buy.
              <br />
              <span>Drive.</span>
            </h1>

            <p>
              Join our automotive marketplace and discover quality cars from
              trusted dealers and private sellers.
            </p>
          </div>

          <div className="hero-features">
            <div>
              <strong>01</strong>
              <span>Verified Cars</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Trusted Sellers</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Easy Buying</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="register-section">
        <div className="register-container">
          <div className="mobile-brand">
            <span className="brand-icon">🏎️</span>
            AutoKart
          </div>

          <div className="register-header">
            <p className="form-label-top">CREATE YOUR ACCOUNT</p>

            <h2>Welcome to AutoKart</h2>

            <p>Create an account to buy, sell and manage your cars.</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fname">Full Name</label>

              <input
                type="text"
                id="fname"
                placeholder="Enter your full name"
                {...register("fname", {
                  required: "Full Name is required",
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Full name can contain only letters and spaces",
                  },
                  minLength: {
                    value: 3,
                    message: "Use at least 3 characters",
                  },
                })}
                className={errors.fname ? "input-error" : ""}
              />

              {errors.fname && (
                <p className="error-message">{errors.fname.message}</p>
              )}
            </div>

            <div className="form-group">
  <label htmlFor="address">Address</label>

  <textarea
    id="address"
    placeholder="Enter your complete address"
    {...register("address", {
      required: "Address is required",
      minLength: {
        value: 10,
        message: "Please enter a complete address",
      },
    })}
    className={errors.address ? "input-error" : ""}
  ></textarea>

  {errors.address && (
    <p className="error-message">
      {errors.address.message}
    </p>
  )}
</div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Phone number */}
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>

              <input
                type="number"
                id="pno"
                placeholder="Enter your number"
                {...register("pno", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                  maxLength: {
                    value: 10,
                    message: "Use can enter only 10 numbers",
                  },
                })}
                className={errors.password ? "input-error" : ""}
              />

              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>

           {/* Password */}
<div className="form-group">
  <label htmlFor="password">Password</label>

  <div className="password-wrapper">

    <input
      type={showPassword ? "text" : "password"}
      id="password"
      placeholder="Create a password"
      {...register("password", {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Use at least 8 characters",
        },
      })}
      className={errors.password ? "input-error" : ""}
    />

    <button
      type="button"
      className="password-toggle"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "Hide" : "Show"}
    </button>

  </div>

  {errors.password && (
    <p className="error-message">
      {errors.password.message}
    </p>
  )}
</div>


{/* Confirm Password */}
<div className="form-group">
  <label htmlFor="cpassword">Confirm Password</label>

  <div className="password-wrapper">

    <input
      type={showConfirmPassword ? "text" : "password"}
      id="cpassword"
      placeholder="Confirm your password"
      {...register("cpassword", {
        required: "Confirm Password is required",
        validate: (value) =>
          value === password || "Passwords do not match",
      })}
      className={errors.cpassword ? "input-error" : ""}
    />

    <button
      type="button"
      className="password-toggle"
      onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
      }
    >
      {showConfirmPassword ? "Hide" : "Show"}
    </button>

  </div>

  {errors.cpassword && (
    <p className="error-message">
      {errors.cpassword.message}
    </p>
  )}
</div>

            <div className="terms-checkbox">

  <label>
    <input
      type="checkbox"
      {...register("terms", {
        required: "You must accept the Terms & Conditions",
      })}
    />

    <span>
      I agree to the{" "}
      <a href="/terms" target="_blank" rel="noreferrer">
        Terms & Conditions
      </a>{" "}
      and{" "}
      <a href="/privacy" target="_blank" rel="noreferrer">
        Privacy Policy
      </a>
    </span>
  </label>

  {errors.terms && (
    <p className="error-message">
      {errors.terms.message}
    </p>
  )}

</div>

            <button type="submit" className="register-button">
              Create Account
              <span>→</span>
            </button>
          </form>

          <p className="login-text">
            Already have an account?
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="login-link"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
