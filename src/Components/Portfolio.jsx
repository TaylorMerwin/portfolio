/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
//import image from "../images/trail-in-woods.jpg";

//const imageAltText = "Trees bending over a trail in the woods.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
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
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}></div>
        <div className="container">
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
