import React, { useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import History from "./History";
import { Link } from "react-router-dom";
import loginimg from "../assets/login.png";
function Login() {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  // const login = useSelector((state) => state.loginSuccess);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = {
      email,
      password,
    };
    if (!email || !password) {
      setErrors("Failed to login, Please fill the field !");
    }
    if (email && password) {
      axios
        .post(
          "https://signup-signin-resetpassword.herokuapp.com/user/login",
          dataToSubmit
        )
        .then((response) => {
          const a = response.data.loginSucess;
          if (a) {
            console.log("You are logged in");
            History.push("/about");
            History.go(0);
          } else {
            setErrors(
              "Failed to login, you can check your email and password !"
            );
            console.log(errors);
          }
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 hide">
            <img src={loginimg} alt="login.png" className="login-img" />
          </div>
          <div className="login-container col-lg-4 col-md-4 col-12">
            <div>
              <h1 className="login-h1">Login</h1>
              <form>
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
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                {errors && (
                  <div>
                    <p>{errors}</p>
                  </div>
                )}
                <div className="row buttons-wrapper">
                  <button
                    type="submit"
                    onClick={(event) => submitForm(event)}
                    className="btn btn-primary"
                  >
                    Sign In
                  </button>
                  <Link to="/register">
                    <button className="btn btn-warning">Register</button>
                  </Link>
                  <Link to="/forgotPassword">
                    <button type="submit" className="btn btn-danger">
                      Forgot Password
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
