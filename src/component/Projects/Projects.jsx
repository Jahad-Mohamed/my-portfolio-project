import React from "react";
import "./project.scss";

const Projects = () => {
  return (
    <div className="project__container">
      <h1 className="project__title">My Projects</h1>
      <div className="project-container-card">
        <img
          className="project-container-card__image"
          variant="top"
          src="holder.js/100px180"
        />

        <div className="project-container-card__title"> Title</div>
        <div className="project-container-card__description">
          Some quick example text to build on the div title and make up the bulk
          of the div's content.
        </div>
        <button className="project-container-card__link" variant="primary">
          Go somewhere
        </button>
      </div>
    </div>
  );
};

export default Projects;
