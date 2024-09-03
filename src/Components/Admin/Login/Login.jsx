import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:1433/api/login", { email, password });
      console.log("response", response);
      if (response.data.data.success) {
        localStorage.setItem("token", response.data.data.token);

        toast.success('Login successful!');
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);

      } else {
        toast.error("Login failed: " + response.data.data.message);
      }
    } catch (error) {
      toast.error("An error occurred during login.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="container">
      <h2 className="heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="email">Email:</label>
          <input
            id="email"
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">Password:</label>
          <input
            id="password"
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">Login</button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Login;
