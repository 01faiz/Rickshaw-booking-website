import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        
       <Link to="/"> <h3 className="logo">E-Riksha</h3></Link>  
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/bookride"> book Ride </Link>
          <Link to="/about"> About </Link>
          <Link to="/Services"> Services </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/bookride"> Book Ride </Link>
        <Link to="/about"> About </Link>
        <Link to="/Services"> Services </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
