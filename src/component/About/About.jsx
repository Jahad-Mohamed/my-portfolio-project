import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section className="about__section ">
      <p className="about__greetings">Hi there!</p>
      <div>
        <span className="about__greetings">I'm </span>
        <span className="about__my-name"> Jahad Mohamed</span>
      </div>
      <p className="about__greetings"> Welcome to my website!</p>
    </section>
  );
};

export default About;
