/**
 * Portfolio component
 */

import React from "react";

//import image from "../images/trail-in-woods.jpg";

//const imageAltText = "Trees bending over a trail in the woods.";

/**
 * Project list
 */
const projectList = [
  {
    title: "Pig Dice Game",
    description:
      "Spin on classic dice game. Created with TypeScript, CSS and HTMl. Hosted on GitHub Pages.",
    url: "https://github.com/TaylorMerwin/dice-game",
  },
  {
    title: "Crafty Companion",
    description:
      "Project management application written in Java. Includes a GUI, unit tests, and data persistence. Created for TCSS 360: Software Development and Quality Assurance Techniques",
    url: "https://github.com/TaylorMerwin/TCSS360-team-project-taylor",
    photo: "https://cdn.pixabay.com/photo/2023/07/15/12/58/sunflower-8128779_1280.jpg"
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}></div>
        <div className="container" style={{ maxWidth: "40%" }}>
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              {project.photo && <img src={project.photo} alt={project.title} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
