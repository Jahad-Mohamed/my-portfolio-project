import React from "react";
import "./about.scss";
import Spin from "react-reveal/Spin";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";

const About = () => {
  return (
    <div className="section__container" id="about">
      <section className="about__section about">
        <div className="about__title">About</div>

        <Rotate top left delay={1500} duration={600}>
          <p className="about__text">
            I'm a web developer focused to building creative, dynamtic react
            applications and continuing to develop new skills in web
            development. Currently looking for new employment opportunities{" "}
            <br />
            <br />
            In 2022 I graduated from BrainStation’s full-stack web development
            diploma program, where I strengthened my skills in HTML, CSS, and
            Javascript in a challenging bootcamp. I am most familiar with
            ReactJS as a front-end framework and NodeJS and ExpressJS as
            back-end frameworks, but have also completed various personal
            projects using skills in other technologies such as Nextjs, 3js
            React Native and Firebase.
          </p>{" "}
        </Rotate>
      </section>
    </div>
  );
};

export default About;
