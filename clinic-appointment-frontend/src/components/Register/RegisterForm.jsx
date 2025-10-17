import React, { useState } from "react";
import "./Register.css";
import OIP from "../../assets/OIP.jpg";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="image-section">
          {/* ✅ Use imported image */}
          <img src={OIP} alt="Illustration" />
        </div>

        <div className="form-section">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <div className="terms">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label>I agree to the Terms & Conditions</label>
            </div>

            <button type="submit" className="create-btn">
              Create Account
            </button>

            <p className="or">or</p>

            <button type="button" className="social-btn google">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
              />
              Continue with Google
            </button>

            <button type="button" className="social-btn facebook">
              <img
                src="https://img.icons8.com/color/16/000000/facebook-new.png"
                alt="Facebook"
              />
              Continue with Facebook
            </button>

            <p className="login-link">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
