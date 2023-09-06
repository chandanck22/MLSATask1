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
import image from "../images/design-desk.jpeg";

const imageAltText = "portfolio section image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Make your first open source contribution 🎉",
    description:
      "Become a part of open-source community by contributing to open-source.",
    url: "https://nullhackers.com/make-your-first-open-source-contribution",
  },
  {
    title: "Essential Git Commands You Should Know",
    description:
      "Git is a popular version control system used by software developers and teams to manage their codebase. It allows users to track changes, revert to previous versions, and collaborate on code with ease. To effectively use Git, it's important to be familiar with its basic commands.",
    url: "https://nullhackers.com/essential-git-commands-you-should-know",
  },
  {
    title: "My Resume",
    description:
      "My Resume it contains all my experience and skills.",
    url: "https://drive.google.com/file/d/19uEbdpof33Os8uRjdbYOoGjvfPY4QDYO/view?usp=sharing",
  },
  {
    title: "Next Level GitHub Profile",
    description:
      "This video is all about how you can make your GitHub profile interactive and impressive, so people can attract to your profile.",
    url: "https://youtu.be/vWfA8zr4S44?si=WvA8gPuQkIN44kqs",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
