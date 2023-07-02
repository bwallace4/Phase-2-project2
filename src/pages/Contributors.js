import React from "react";
import "../styles/Contributors.css";
import { useEffect, useState } from "react";

function Menu() {
  const [names, setNames] = useState([]);

  const displayname = names.map((nam) => {
    return (
      <>
        <p>{nam.name}</p>
      </>
    );
  });

  useEffect(() => {
    fetch("http://localhost:3300/names")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        console.log(data);
        setNames(data);
      });
  }, []);

  return <div>{displayname}</div>;
}
export default Menu;
