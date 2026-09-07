import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";
import { use, useState } from "react";
import users from "../data/users";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {

    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || users;

    const user = savedUsers.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

    if (!user) {
      setLoginError("Invalid email or password");
      return;
    }

    setLoginError("");

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="login-page">
      {/* ================= LEFT HERO ================= */}

      <div className="login-hero">
        <div className="login-hero-overlay"></div>

        <div className="login-hero-content">
          <div className="login-brand">
            <span className="login-brand-icon">◆</span>
            <span>AutoKart</span>
          </div>

          <div className="login-hero-text">
            <p className="login-small-title">YOUR JOURNEY STARTS HERE</p>

            <h1>
              Drive
              <br />
              <span>Something</span>
              <br />
              Extraordinary.
            </h1>

            <p>
              Buy and sell quality cars with confidence. Your next drive is just
              a few clicks away.
            </p>
          </div>

          <div className="login-hero-bottom">
            <span>BUY</span>
            <span>SELL</span>
            <span>DRIVE</span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT LOGIN ================= */}

      <div className="login-section">
        <div className="login-container">
          {/* Mobile Logo */}

          <div className="login-mobile-brand">
            <span className="login-brand-icon">◆</span>
            AutoKart
          </div>

          {/* Header */}

          <div className="login-header">
            <p className="login-form-label">MEMBER LOGIN</p>

            <h2>Welcome back.</h2>

            <p>Sign in to continue to your AutoKart account.</p>
          </div>

          {/* Form */}

          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}

            <div className="login-form-group">
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
                className={errors.email ? "login-input-error" : ""}
              />

              {errors.email && (
                <p className="login-error">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}

            <div className="login-form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>
              </div>

              <div className="login-form-group">
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Use at least 8 characters",
                      },
                    })}
                    className={errors.password ? "login-input-error" : ""}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <button type="button" className="forgot-password">
                  Forgot password?
                </button>
              </div>

              {errors.password && (
                <p className="login-error">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me */}

            <div className="remember-row">
              <label className="remember-label">
                <input type="checkbox" {...register("remember")} />

                <span>Remember me</span>
              </label>
            </div>

            {/* Login Button */}

            <button type="submit" className="login-button">
              Sign In
              <span>→</span>
            </button>
          </form>

          {/* Register */}

          <p className="register-text">
            Don't have an account?
            <button
              type="button"
              className="register-link"
              onClick={() => navigate("/register")}
            >
              Create one
            </button>
          </p>

          {/* Terms */}

          <p className="login-terms">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
