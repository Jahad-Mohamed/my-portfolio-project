import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Contact</h1>
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </div>

      <div className="contact__container">
        <div className="contact__info">
          <h4>Contact Information</h4>
          <p>
            Feel free to contact me from the details listed below, alternatively
            you can fill in a form and will get back to you within 24 hours.
          </p>
          <div className="icon-text">
            <i className="icon"> </i>
            <span>+44 78428 92476</span>
          </div>
          <div className="icon-text">
            <i className="icon"> </i>
            <span>jaybannks@gmail.com</span>
          </div>
          <div className="icon-text">
            <i className="icon"> </i>
            <span>Junction Rd, London, N19 5LB</span>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
              <i className="icon"> </i>
            </a>
          </div>
        </div>
      </div>

      <form action=""></form>
    </div>
  );
};

export default Contact;
