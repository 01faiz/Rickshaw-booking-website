import React from "react";
import autoo from "../assets/auto.png";
import "../styles/Services.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${autoo})` }}
      ></div>
          <div className="rightSide">
            <h1> Services</h1>
            <p> The upfront price you are shown may change if you add stops, update your destination, make significant changes to the route or duration of the trip, or pass through a toll that was not factored into your upfront price. In addition, you may incur wait-time fees for the time you take to get to the car at the pickup or fees for time spent at an on-trip stop.</p>

          <Link to="/About"><button type="submit"> Know more </button> </Link> 
          </div>
    </div>
  );
}

export default Contact;
