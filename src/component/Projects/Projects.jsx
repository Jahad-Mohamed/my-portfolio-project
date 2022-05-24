import React from "react";
import "./project.scss";
import Pig from "/images/piggame.png";
import Todo from "/images/todolist.png";
import Expense from "/images/expenseTracker.png";
import Amazon from "/images/amazon.png";

const Projects = () => {
  return (
    <section id="projects" className="project">
      <div className="project-section">
        <div className="project-title">My Projects</div>

        <div className="project__container">
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
              <img src={Todo} alt="" className="container-card__image" />
            </div>
            <div className="container-card__title"> To do List</div>
            <p className="container-card__description">
              This is my awesome to do list, created using HTML, CSS, and
              Vanilla JavaScript.
            </p>
            <button className="container-card__link" variant="primary">
              <a href="https://my-awesometodolist.netlify.app/">
                Take me to Website
              </a>
            </button>
          </div>

          <div className="container-card" id="container-card">
            <div className="container-card__image">
              <img src={Expense} alt="" className="container-card__image" />
            </div>
            <div className="container-card__title"> Expense Tracker</div>
            <p className="container-card__description">
              This is an expense tracker created using React. Features include
              props, state, hooks.
            </p>
            <button className="container-card__link" variant="primary">
              <a href="https://expensetracr.netlify.app/">Take me to Website</a>
            </button>{" "}
          </div>
          <div className="container-card" id="container-card">
            <div className="container-card__image">
              <img src={Amazon} alt="" className="container-card__image" />
            </div>
            <div className="container-card__title"> Amazon Clone</div>
            <p className="container-card__description">
              This Amazon clone website has been built with Nextjs, Tailwind CSS
              and Redux.
            </p>
            <button className="container-card__link" variant="primary">
              <a href="https://amazon-clone-cyan-omega.vercel.app//">
                Take me to Website
              </a>
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
