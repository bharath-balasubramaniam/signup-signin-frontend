import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import NotFound from "./components/NotFound";
import { createStore } from "redux";
const INITIAL_VALUE = {
  loginSuccess: false,
  registerSuccess: false,
};
const reducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "login":
      return { ...state, loginSuccess: action.payload.loginSuccess };
    case "register":
      return { ...state, registerSuccess: action.payload };
    default:
      return { ...state };
  }
};
export const store = createStore(reducer);
function App() {
  return (
    <div className>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/" exact={true} component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
