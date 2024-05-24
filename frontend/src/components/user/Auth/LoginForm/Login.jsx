import "../../Auth/Auth.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../../action/UserAuthActions";
//import logo from "../../../../assets/logo.jpg";

const LoginForm = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    setFormData({
      email: "",
      password: "",
    });
  };
 
  const navigate = useNavigate();
  useEffect(() => {
    
    if (user && user?.user?.role) {
      if (user.user?.role === "admin") {
        navigate("/");
      } else if (user?.user?.role === "user") {
        navigate("/");
      }
    }
  }, [ user]);

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
        <div className="raiudsStyle">
          <p className="Log-sign">Login</p>
        </div>
        <div className="loginContainerStyle">
          <h2>
            {/* <img src={logo} alt="Door Plus" className="logoImg" /> */}
            Door Plus
          </h2>
          <form class="loginFormStyle" onSubmit={handleSubmit}>
            <div class="inputStyleContainer">
              <input
                type="text"
                name="email"
                placeholder="Email"
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
            <div style={{ textAlign: "end" }}>
              <Link
                to="/ForgotPassword"
                style={{
                  fontSize: "14px",
                  color: "#333",
                  marginTop: "10px",
                  textDecoration: "none",
                }}
              >
                forgot password ?
              </Link>
            </div>
            <button type="submit" className="buttonStyle">
              Login
            </button>
            <div className="authLinksContainer">
              <div>
                <span className="account">don't have an account ?</span>
                <Link to="/SignupForm" className="authLink">
                  Create Account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
