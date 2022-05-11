import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section className="about__section">
      <div className="about__title">About</div>
      <p className="about__text">
        {" "}
        I'm a web developer focused to building creative, dynamtic react
        applications and continuing to develop new skills in web development.
        Currently looking for new employment opportunities{" "}
      </p>
      <br />
      <p className="about__text">
        In 2022 I graduated from BrainStation’s full-stack web development
        diploma program, where I strengthened my skills in HTML, CSS, and
        Javascript in a challenging bootcamp. I am most familiar with ReactJS as
        a front-end framework and NodeJS and ExpressJS as back-end frameworks,
        but have also completed various personal projects using skills in other
        technologies such as Nextjs, 3js React Native and Firebase.
      </p>
    </section>
  );
};

export default About;
