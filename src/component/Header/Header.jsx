import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <section className="header__section section">
      <p className="header__greetings">Hi there!</p>
      <div className="header__name-section">
        <span className="header__greetings">I'm </span>
        <span className="header__my-name"> Jahad Mohamed</span>
      </div>
      <p className="header__greetings"> Welcome to my website!</p>
    </section>
  );
};

export default Header;
