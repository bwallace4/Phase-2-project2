import React from "react";
// import { Shop } from "./Shop";
//import ShopItem from "../components/ShopItem";
import "../styles/Sale.css";
import {useEffect,useState} from "react";

function Menu() {
  const [shop, setShop] = useState([]);



  const displayshop = shop.map((shops) =>{
    return(
      <>
      <p>{shops.name}</p>
      <p>{shops.image}</p>
      <p>{shops.price}</p>
      </>
    )
  })
  
  
  
  
  useEffect(() => {
    fetch("http://localhost:3300/shop")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        console.log(data)
       setShop(data);
      });
  },[]);

  return(
  <div>{displayshop}</div>
  )}

export default Menu;
//     <div className="sale">
//       <h1 className="saleTitle">List of items</h1>
//       <div className="saleList">
//         {Shop.map((shopItem, key) => {
//           return (
//             <ShopItem
//               key={key}
//               image={shopItem.image}
//               name={shopItem.name}
//               price={shopItem.price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

