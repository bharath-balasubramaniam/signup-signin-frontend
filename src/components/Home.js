import React from "react";
import gux_cat from "../assets/gux_cat.svg";
import bootstrap from "../assets/bootstrap.svg";
import reactjs from "../assets/react.png";
import mongo from "../assets/mongodb.png";
import express from "../assets/express.png";
import nodejs from "../assets/nodejs.png";
import reduxjs from "../assets/redux.png";
import router from "../assets/router.jpg";
import axios from "../assets/axios.jpg";
import "./home.css";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={gux_cat}
              className="App-log"
              alt="log"
              height="35%"
              width="90%"
            />
            <h2
              style={{
                fontFamily: "cursive",
                fontSize: "3rem",
                position: "relative",
                bottom: ".2rem",
              }}
            >
              About Me
            </h2>
            <p style={{ fontFamily: "cursive", fontSize: "1.5rem" }}>
              I am a skilled MERN Stack developer. I have the potential of
              converting ideas into working products. I'm good in both Front end
              and Back end Web development. I have a special intrests in the
              field of Artificial Intelligence and Data Science.If You want to
              Know more about myself please click the the bv logo on the navbar
            </p>
          </div>
          {/* </div> */}
          <div className="col-lg-6 col-md-6  col-sm-12">
            <h3
              className="h3-pro"
              style={{
                fontFamily: "cursive",
                fontSize: "2rem",
                position: "relative",
                top: "1rem",
              }}
            >
              A full stack MERN Project
            </h3>
            <p
              className="content"
              style={{
                fontFamily: "cursive",
                fontSize: "1.2rem",
                marginTop: "2rem",
              }}
            >
              App is built with MongoDB,Express, React.js, Node.js and some
              other external libraries :
            </p>
            <div className="row">
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img src={mongo} className="App-logo-1" alt="logo" />
                <h3 className="logo-h3">MongoDB</h3>
              </div>
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img
                  src={express}
                  className="App-logo-2"
                  alt="logo"
                  height="30px"
                  style={{ marginRight: 7 + "px" }}
                />
                <h3 className="logo-h3">Express</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img
                  src={reactjs}
                  className="App-logo-2"
                  alt="logo"
                  height="45px"
                  style={{ marginRight: 7 + "px" }}
                />
                <h3 className="logo-h3">React</h3>
              </div>
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img
                  src={nodejs}
                  className="App-logo-1"
                  alt="logo"
                  height="30px"
                  style={{ marginRight: 7 + "px" }}
                />
                <h3 className="logo-h3">Nodejs</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img
                  src={reduxjs}
                  className="App-logo-1"
                  alt="logo"
                  height="30px"
                  style={{ marginRight: 7 + "px" }}
                />
                <h3 className="logo-h3">Redux</h3>
              </div>
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img
                  src={router}
                  className="App-logo-1"
                  alt="logo"
                  height="30px"
                  style={{ marginRight: 7 + "px" }}
                />
                <h3 className="logo-h3">React-Router-Dom</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img
                  src={axios}
                  className="App-logo-1"
                  alt="logo"
                  height="30px"
                  style={{ marginRight: 7 + "px" }}
                />
                <h3 className="logo-h3">Axios</h3>
              </div>
              <div className="col-6-lg col crd d-flex align-items-center d-flex justify-content-center">
                <img
                  src={bootstrap}
                  className="App-logo-1"
                  alt="logo"
                  height="30px"
                  style={{ marginRight: 7 + "px" }}
                />
                <h3 className="logo-h3">Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
