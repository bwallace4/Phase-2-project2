import React from "react";
import team from "../images/team.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${team})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Meet The Team</h1>
        <p>
        We are committed to enabling a high-performance culture and supporting our team members’ ability to live with purpose every day.
Our aim is to create a positive work environment where everyone can thrive and find opportunities to grow, learn, and pursue their passions while contributing to our purpose to create healthier futures.
        </p>
      </div>
    </div>
  );
}

export default About;
