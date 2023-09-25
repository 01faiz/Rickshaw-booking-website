import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

import "../styles/bookride.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Book Your Ride</h1>
      <div className="menu-box"> 
                <div className="menuList">
                  {/* <button>book</button> */}
                  {MenuList.map((menuItem, key) => {
                    return (
                      <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        price ={menuItem.price}
                        
                      />
                      
                    );
                    
                  })}
                  
                     
                   
                  
                
                </div>   
                
      
      </div>
     
    </div>
  );
}

export default Menu;
