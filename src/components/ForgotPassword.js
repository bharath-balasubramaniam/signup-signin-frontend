import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import forgotimg from "../assets/forgot.png";
function ForgotPassword() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = {
      email,
    };
    if (!email || !name) {
      setErrors("Failed to Reset, Please fill the field !");
    }
    if (email && name) {
      axios
        .post(
          "https://forgotpassword-sigin.herokuapp.com/user/forgotPassword",
          dataToSubmit
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            alert(
              "Your password reset link is sent to your registered mail id"
            );
          } else {
            setErrors(
              "Failed to access your data. you can check your email and name again !"
            );
          }
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12">
            <img src={forgotimg} alt="forgot.png" className="forgot-img" />
          </div>
          <div className="login-container col-lg-4 col-md-4 col-12">
            <div>
              <h1 className="forgot-h1">Forgot Password</h1>
              <div className="form-group">
                <label htmlFor="name">User Name</label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email1">Email address</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  value={email}
                  className="form-control"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              {errors && (
                <div>
                  <p>{errors}</p>
                </div>
              )}
              <div className=" button">
                <button
                  type="submit"
                  onClick={(event) => submitForm(event)}
                  className="btn btn-primary forgot-btn"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
