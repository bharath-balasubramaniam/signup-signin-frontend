import React, { useEffect } from "react";
import axios from "axios";
import History from "./History";
function About() {
  useEffect(() => {
    console.log("about.js");
    axios
      .get("https://signup-signin-resetpassword.herokuapp.com/user/auth")
      .then((response) => {
        if (response.data.isAuth === false) {
          History.push("/login");
          History.go(0);
        }
      });
  });
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
