import React, { useEffect } from "react";
import axios from "axios";
import History from "./History";
// import { request } from "http";
function About() {
  const token = document.cookie;
  useEffect(() => {
    // axios.defaults.withCredentials = true;
    console.log("about.js");
    fetch("https://forgotpassword-sigin.herokuapp.com/user/auth", {
      method: "get",
      headers: {
        Authorization: token, //the token is a variable which holds the token
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data.login);
        if (!data.login) {
          History.push("/login");
          History.go(0);
        }
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center" }}>
            check whether you are logged in or not !
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
