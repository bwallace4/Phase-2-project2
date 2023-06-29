import React from "react";
import { Shop } from "./Shop";
import ShopItem from "../components/ShopItem";
import "../styles/Sale.css";

function Menu() {
  return (
    <div className="sale">
      <h1 className="saleTitle">List of items</h1>
      <div className="saleList">
        {Shop.map((shopItem, key) => {
          return (
            <ShopItem
              key={key}
              image={shopItem.image}
              name={shopItem.name}
              price={shopItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
