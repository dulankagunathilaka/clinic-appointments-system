import React from 'react'
import './Login.css';
import doctorImg from "../../assets/OIP.jpg";

export const LoginRegister = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src={doctorImg} alt="Doctor illustration" />
        </div>

        <div className="login-form">
          <h2>Log in</h2>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <a href="#" className="forgot-link">Forgot Password?</a>

          <button className="login-btn">Login</button>

          <div className="divider">or</div>

          <button className="google-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
            Continue with Google
          </button>

          <button className="facebook-btn">
            <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook" />
            Continue with Facebook
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="/Register">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
