import React, { useState } from "react";
import storelogo from "../images/shop.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={storelogo} alt="shop" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/sale"> Sale </Link>
          <Link to="/about"> About </Link>
          <Link to="/blog"> Blog </Link>
         
 
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/sale"> Sale </Link>
        <Link to="/about"> About </Link>
        <Link to="/blog"> Blog </Link>
       

        <button onClick={toggleNavbar}>
     
        </button>
      </div>
    </div>
  );
}

export default Navbar;
