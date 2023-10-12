import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Lay from "./pages/Lay/Lay";
import Molly from "./pages/Molly/Molly";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lay" element={<Lay />} />
        <Route path="/molly" element={<Molly />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
