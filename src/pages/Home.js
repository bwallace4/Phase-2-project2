import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${home})` }}>
      <div className="headerContainer">
        <h1> I SELL THINGS </h1>
        <Link to="/sale">
          <button> Browse</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
