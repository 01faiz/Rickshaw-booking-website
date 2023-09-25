import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/web_HD2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Make Your Trip Easy </h1>
        <h1> With E-Riksha</h1>
        <Link to="/bookride">
          <button> Book Ride </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
