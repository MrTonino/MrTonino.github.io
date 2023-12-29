import React from "react";
function Welcome(props) {
  return (
    <>
      <h1>
        Welcome to {props.name}'s Portfolio Website! This project showcases my
        skills, projects, and achievements as a web developer. It's a reflection
        of my journey and growth in the world of web development.
      </h1>
      <div>
        <h1>Below is a list of the programming languages I have learnt</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascrip</li>
          <li>React</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </div>
    </>
  );
}
export default Welcome;
