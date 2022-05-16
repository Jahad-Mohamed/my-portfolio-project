import React from "react";
import "./skills.scss";
import HTML from "/ToolsIcon/HTML.svg";
import CSS from "/ToolsIcon/CSS.svg";
import JS from "/ToolsIcon/javascript.png";
import R from "/ToolsIcon/react.svg";
import Node from "/ToolsIcon/node.svg";
import GitHub from "/ToolsIcon/github.png";
import Firebase from "/ToolsIcon/firebase.png";
import Next from "/ToolsIcon/next.png";
import Sass from "/ToolsIcon/sass.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";

const Skills = () => {
  return (
    <div className="skills__container">
      <section className="skills__section">
        <div className="skills__title">Skills</div>
        <div className="skills__icon-container">
          <Fade top delay={1300} duration={800}>
            <img src={HTML} alt="HTML" className="skills__icons" />
          </Fade>
          <Fade left delay={1450} duration={800}>
            {" "}
            <img src={CSS} alt="CSS" className="skills__icons" />
          </Fade>
          <Fade right delay={1600} duration={800}>
            {" "}
            <img src={JS} alt="JAVASCRIPT" className="skills__icons" />
          </Fade>
          <Fade bottom delay={1750} duration={800}>
            {" "}
            <img src={R} alt="REACT" className="skills__icons" />
          </Fade>
          <Fade top delay={1850} duration={800}>
            {" "}
            <img src={Sass} alt="SASS" className="skills__icons" />
          </Fade>

          <Rotate bottom left delay={2050} duration={800}>
            <img src={Node} alt="NODE" className="skills__icons" />
          </Rotate>
          <Rotate bottom left delay={2050} duration={800}>
            <img src={GitHub} alt="GITHUB" className="skills__icons" />
          </Rotate>
          <Zoom top delay={2100} duration={800}>
            <img src={Firebase} alt="FIREBASE" className="skills__icons" />
          </Zoom>

          <Rotate bottom right delay={1050} duration={800}>
            <img src={Next} alt="NEXT" className="skills__icons" />
          </Rotate>
        </div>
      </section>
    </div>
  );
};

export default Skills;
