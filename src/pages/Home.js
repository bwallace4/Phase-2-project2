import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className='home'
      style={{
        backgroundImage: `url(https://assets.editorial.aetnd.com/uploads/2009/12/topic-july-4-gettyimages-815196336.jpg?)`,
      }}
    >
      <div className='headerContainer'>
        <h1>Lets celebrate our independence</h1>
        <Link to='/contributors'>
          <button>Signees</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
