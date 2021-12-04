import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import resetimg from "../assets/reset.png";
import History from "./History";
function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errors, setErrors] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = {
      password,
    };
    if (!password || !rePassword) {
      setErrors("Failed to Reset, Please fill the field !");
    }
    if (password === rePassword) {
      console.log(
        "https://forgotpassword-sigin.herokuapp.com",
        props.location.pathname
      );
      axios
        .post(
          `https://forgotpassword-sigin.herokuapp.com/user${props.location.pathname}`,
          dataToSubmit
        )
        .then((response) => {
          console.log(response.data.success);
          if (response.data.success) {
            alert("Your password is updated!");
            History.push("/login");
            History.go(0);
          } else {
            setErrors(
              "Failed to update your password. you can check your email and try again !"
            );
          }
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="co-lg-8 col-md-8 col-12">
            <img src={resetimg} alt="forgot.png" className="reset-img" />
          </div>
          <div className="reset-container col-lg-4 col-md-4 col-12">
            <div>
              <h1 className="register-h1">Reset Password</h1>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  className="form-control"
                  id="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rePassword">Confirm Password</label>
                <input
                  type="rePassword"
                  onChange={(e) => setRePassword(e.target.value)}
                  id="rePassword"
                  name="rePassword"
                  value={rePassword}
                  className="form-control"
                />
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
export default ResetPassword;
