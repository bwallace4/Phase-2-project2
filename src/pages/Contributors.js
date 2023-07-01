import React from "react";
import "../styles/Sale.css";
import { useEffect, useState } from "react";

function Menu() {
  const [shop, setShop] = useState([]);

  const displayshop = shop.map((shops) => {
    return (
      <>
        <p>{shops.name}</p>
      </>
    );
  });

  useEffect(() => {
    fetch("http://localhost:3300/shop")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        console.log(data);
        setShop(data);
      });
  }, []);

  return <div>{displayshop}</div>;
}

export default Menu;
