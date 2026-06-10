import React, { useState } from "react";
import "./AuthPage.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formValues, setFormValues] = useState({
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    loginEmail: "",
    loginPassword: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.registerName,
          email: formValues.registerEmail,
          password: formValues.registerPassword,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setStatus({
        type: "success",
        message: "Account created. Please sign in.",
      });
      setFormValues((prev) => ({
        ...prev,
        registerName: "",
        registerEmail: "",
        registerPassword: "",
      }));
      setIsSignup(false);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formValues.loginEmail,
          password: formValues.loginPassword,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("docuflowToken", data.token || "");
      setStatus({ type: "success", message: "Login successful. Token saved." });
      setFormValues((prev) => ({ ...prev, loginPassword: "" }));
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className={`container ${isSignup ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <button type="button" className="icon" aria-label="Google">
                G
              </button>
              <button type="button" className="icon" aria-label="Facebook">
                F
              </button>
              <button type="button" className="icon" aria-label="GitHub">
                GH
              </button>
              <button type="button" className="icon" aria-label="LinkedIn">
                in
              </button>
            </div>
            <span>or use your email for registration</span>
            <input
              name="registerName"
              type="text"
              placeholder="Name"
              value={formValues.registerName}
              onChange={handleChange}
              required
            />
            <input
              name="registerEmail"
              type="email"
              placeholder="Email"
              value={formValues.registerEmail}
              onChange={handleChange}
              required
            />
            <input
              name="registerPassword"
              type="password"
              placeholder="Password"
              value={formValues.registerPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <button type="button" className="icon" aria-label="Google">
                G
              </button>
              <button type="button" className="icon" aria-label="Facebook">
                F
              </button>
              <button type="button" className="icon" aria-label="GitHub">
                GH
              </button>
              <button type="button" className="icon" aria-label="LinkedIn">
                in
              </button>
            </div>
            <span>or use your email and password</span>
            <input
              name="loginEmail"
              type="email"
              placeholder="Email"
              value={formValues.loginEmail}
              onChange={handleChange}
              required
            />
            <input
              name="loginPassword"
              type="password"
              placeholder="Password"
              value={formValues.loginPassword}
              onChange={handleChange}
              required
            />
            <a href="#" className="forgot-link">
              Forget Your Password?
            </a>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign In"}
            </button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>
                Enter your required details here to use the features of this
                site.
              </p>
              <button
                type="button"
                className="panel-button toggle-button"
                id="login"
                onClick={() => setIsSignup(false)}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>You can register here to use the features of this site.</p>
              <button
                type="button"
                className="panel-button toggle-button"
                id="register"
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
