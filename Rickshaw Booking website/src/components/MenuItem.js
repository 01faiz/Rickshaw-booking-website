import React from "react";
import "../styles/Menuitem.css";
import { Link } from "react-router-dom";



function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div  className="menu-img" style={{ backgroundImage: `url(${image})`, height:"200px"  , width:"230px" , paddingLeft:"30px", marginLeft:"10px", backgroundColor:"white"}}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
                     <Link to="/form">
                     <button className="book-btn">Book</button>
                     </Link>
    </div>
  );
}

export default MenuItem;
