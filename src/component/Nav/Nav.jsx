import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import "./nav.scss";
import Zoom from "react-reveal/Zoom";
import { useState } from "react ";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <Zoom bottom duration={1500}>
        <nav>
          <a
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
            href="#"
          >
            <AiOutlineHome className="nav__icons" />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : " "}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#skills"
            onClick={() => setActiveNav("#skills")}
            className={activeNav === "#skills" ? "active" : " "}
          >
            <BiBook />
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : " "}
          >
            <AiOutlineAppstoreAdd />
          </a>
          <a
            href=" #contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : " "}
          >
            <AiOutlineMessage />
          </a>
        </nav>{" "}
      </Zoom>
    </div>
  );
};

export default Nav;
