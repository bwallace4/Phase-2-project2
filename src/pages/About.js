import React from "react";
import team from "../images/team.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${team})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Happy 4th of July</h1>
        <p>
       I wish to commemorate Americas day of independence. The Fourth of July—also known as Independence Day or July 4th—has been a federal holiday in the United States since 1941, but the tradition of Independence Day celebrations goes back to the 18th century and the American Revolution. On July 2nd, 1776, the Continental Congress voted in favor of independence, and two days later delegates from the 13 colonies adopted the Declaration of Independence, a historic document drafted by Thomas Jefferson. From 1776 to the present day, July 4th has been celebrated as the birth of American independence, with festivities ranging from fireworks, parades and concerts to more casual family gatherings and barbecues. The Fourth of July 2023 is on Tuesday, July 4.
        </p>
      </div>
    </div>
  );
}

export default About;
