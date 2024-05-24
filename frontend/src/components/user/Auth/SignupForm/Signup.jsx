import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../Auth/Auth.css";
import { Link, } from "react-router-dom";
import { registerUser } from "../../../../action/UserAuthActions";
import logo from "../../../../assets/logo.jpg";

const SignupForm = () =>{
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div>
      <div className="raiudsStyle"><p className="Log-sign">Sign Up</p></div>
      <div className="loginContainerStyle">
        <h2>
          <img src={logo} alt="Door Plus" className="logoImg" />
        </h2>
        <form class="loginFormStyle" onSubmit={handleSubmit}>
          <div class="inputStyleContainer">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              class="inputStyle"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div class="inputStyleContainer">
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                class="inputStyle"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          <div className="inputStyleContainer">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="inputStyle"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="fas fa-eye" />
              ) : (
                <i className="fas fa-eye-slash" />
              )}
            </span>
          </div>

          <button type="submit" className="buttonStyle">
          Sign Up
          </button>

          <div className="authLinksContainer">
            <div>
              <Link to="/" className="authLink">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default SignupForm;
