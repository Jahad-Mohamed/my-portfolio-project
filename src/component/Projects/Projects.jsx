import React from "react";
import "./project.scss";
import Pig from "/images/piggame.png";
const Projects = () => {
  return (
    <section id="projects" className="project">
      <div>
        <div className="project-title">My Projects</div>
      </div>
      <div className="project__container">
        <div className="project__containers">
          <div className="container-card" id="container-card">
            <div className="container-card__image">
              <img src={Pig} alt="" className="container-card__image" />
            </div>
            <div className="container-card__title"> Game of Pig</div>
            <p className="container-card__description">
              Some quick example text to build on the div title and make up the
              bulk of the div's content.
            </p>
            <button className="container-card__link" variant="primary">
              <a href="https://thegameofpig.netlify.app/">Take me to Website</a>
            </button>
          </div>
          <div className="container-card" id="container-card">
            <div className="container-card__image">
              <img src={Pig} alt="" className="container-card__image" />
            </div>
            <div className="container-card__title"> Game of Pig</div>
            <p className="container-card__description">
              Some quick example text to build on the div title and make up the
              bulk of the div's content.
            </p>
            <button className="container-card__link" variant="primary">
              <a href="https://thegameofpig.netlify.app/">Take me to Website</a>
            </button>
          </div>
          <div className="container-card" id="container-card">
            <div className="container-card__image">
              <img src={Pig} alt="" className="container-card__image" />
            </div>
            <div className="container-card__title"> Game of Pig</div>
            <p className="container-card__description">
              Some quick example text to build on the div title and make up the
              bulk of the div's content.
            </p>
            <button className="container-card__link" variant="primary">
              <a href="https://thegameofpig.netlify.app/">Take me to Website</a>
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
