import React from "react";
import wo from "../assets/w1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${wo})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        E-Riksha has come a long way ever since its inception in 2022. With a lot of hardwork and perseverance we have made a place for ourselves in the market. As a brand and as a service, it is our constant endeavour to redefine ourselves.Our Riksha can dodge the traffic during peak hours and get you to the destination in a jiffy.
        </p>
      </div>
    </div>
  );
}

export default About;
