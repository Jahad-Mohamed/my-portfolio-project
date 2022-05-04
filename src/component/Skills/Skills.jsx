import React from "react";
import "./skills.scss";
import HTML from "../../../public/ToolsIcon/HTML.svg";
import CSS from "../../../public/ToolsIcon/CSS.svg";
import JS from "../../../public/ToolsIcon/javascript.png";
import R from "../../../public/ToolsIcon/react.svg";
import Node from "../../../public/ToolsIcon/node.svg";
import GitHub from "../../../public/ToolsIcon/github.png";
import Firebase from "../../../public/ToolsIcon/firebase.png";
import Next from "../../../public/ToolsIcon/next.png";
import Sass from "../../../public/ToolsIcon/sass.png";

const Skills = () => {
  return (
    <section className="skills__section">
      <div className="skills__title">Skills</div>
      <div className="skills__icon-container">
        <img src={HTML} alt="HTML" className="skills__icons" />
        <img src={CSS} alt="CSS" className="skills__icons" />
        <img src={JS} alt="JAVASCRIPT" className="skills__icons" />
        <img src={R} alt="REACT" className="skills__icons" />
        <img src={Sass} alt="SASS" className="skills__icons" />
        <img src={Node} alt="NODE" className="skills__icons" />
        <img src={GitHub} alt="GITHUB" className="skills__icons" />
        <img src={Firebase} alt="FIREBASE" className="skills__icons" />
        <img src={Next} alt="NEXT" className="skills__icons" />
      </div>
    </section>
  );
};

export default Skills;
