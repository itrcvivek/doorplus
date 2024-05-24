import React, { useState } from "react";
import logo from "../../../../assets/logo.jpg";
import "../../Auth/Auth.css";


const ForgotPassword = () => {
  const [email, Setemail] = useState();

  const handelchange = (e) => {
    Setemail(e.target.value);
  };

  const handleSubmit = () =>{
    
  }

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
          <p className="Log-sign">Forgot <br/>Password</p>
        </div>
        <div className="loginContainerStyle">
          <h2>
            <img src={logo} alt="Door Plus" className="logoImg" />
          </h2>
          <form class="loginFormStyle" onSubmit={handleSubmit}>
            <div class="inputStyleContainer">
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                class="inputStyle"
                value={email}
                onChange={handelchange}
              />
            </div>

            <button type="submit" className="buttonStyle">
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
