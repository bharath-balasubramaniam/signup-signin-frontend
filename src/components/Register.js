import React, { useState } from "react";
import registerimg from "../assets/register.png";
import "./register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import History from "./History";
// import { useDispatch, useSelector } from "react-redux";
const validateEmail = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
function Register() {
  // const dispatch = useDispatch();
  // const register = useSelector((state) => state.registerSuccess);
  const [errors, setErrors] = useState("");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 hide">
            <img
              src={registerimg}
              alt="register.png"
              className="register-img"
            />
          </div>
          <div className="co-lgl-4 col-md-4 col-12">
            <h1 className="register-h1">Register</h1>
            <Formik
              initialValues={{
                name: "",
                lastname: "",
                email: "",
                password: "",
                role: 0,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) errors.name = "First Name is Required";
                if (!values.lastname) errors.lastname = "Last Name is Required";
                if (!values.email) {
                  errors.email = "E-mail is Required";
                } else if (!validateEmail.test(values.email)) {
                  errors.email = "E-mail is invalid";
                }
                if (!values.password) {
                  errors.password = "Password is Required";
                } else if (values.password.length < 5) {
                  errors.password =
                    "Password should have minimum 5 characters!";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //   setSubmitting(true);
                // }, 400);
                console.log(values);
                axios
                  .post(
                    "https://forgotpassword-sigin.herokuapp.com/user/register",
                    values
                  )
                  .then((response) => {
                    console.log(response.data.success);
                    if (response.data.success) {
                      console.log("You acount is Created!");
                      History.push("/login");
                      History.go(0);
                    } else {
                      setErrors(
                        "Failed to Register, you can check your input fields once !"
                      );
                    }
                  });
              }}
            >
              {({ isSubmitting, handleReset }) => {
                return (
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <Form>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="name">First Name</label>
                              <Field
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                              />
                              <ErrorMessage name="name" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="lastname">Last Name</label>
                              <Field
                                id="lastname"
                                name="lastname"
                                type="text"
                                className="form-control"
                              />
                              <ErrorMessage name="lastname" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="email">E-mail</label>
                              <Field
                                name="email"
                                id="email"
                                type="text"
                                className="form-control"
                              />
                              <ErrorMessage name="email" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="password">Password</label>
                              <Field
                                name="password"
                                id="password"
                                type="text"
                                className="form-control"
                              />
                              <ErrorMessage name="password" />
                            </div>
                          </div>
                          <br />
                          {errors && (
                            <div>
                              <p>{errors}</p>
                            </div>
                          )}
                          <br />
                          <div className="row">
                            <div className="Col col-btn">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                              >
                                submit
                              </button>
                              <button
                                type="reset"
                                onClick={handleReset}
                                className="btn btn-danger"
                              >
                                Reset
                              </button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
