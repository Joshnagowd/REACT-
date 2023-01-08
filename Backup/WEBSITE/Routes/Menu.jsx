import React from "react";
import Navbar from "../COMPONENT/Navbar";
import { MenuList } from "../COMPONENT/MenuList";
import MenuItem from "../COMPONENT/MenuItem";
import "../COMPONENT/Menu.css";

function Menu() {
  return (
    
    <div className="menu">
        <Navbar/>
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;