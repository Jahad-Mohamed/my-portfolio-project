import React from "react";
import "./contact.scss";
import Phone from "/ContactIcon/phone.png";
import Email from "/ContactIcon/email.png";
import Location from "/ContactIcon/location.png";

const Contact = () => {
  return (
    <div className="container-contact" id="contact">
      <section className="contact">
        <div className="contact__container">
          <div className="contact__info">
            <h4>Contact Information</h4>
            <p className="p">
              Feel free to contact me from the details listed below,
              alternatively you can fill in the form and I will get back to you
              within 24 hours.
            </p>
            <div className="icon__section">
              <img src={Phone} alt="Location" className="icon" />
              <span className="icon__text">
                <a className="contact" href="tel:447842892476">
                  +44 7842 892476
                </a>
              </span>
            </div>
            <div className="icon__section">
              <img src={Email} alt="Email" className="icon" />

              <span className="icon__text">
                <a className="contact" href="mailto:jaybannks@gmail.com">
                  jaybannks@gmail.com
                </a>
              </span>
            </div>
            <div className="icon__section">
              <img src={Location} alt="Location" className="icon" />
              <span className="icon__text">
                <a
                  className="contact"
                  href="https://goo.gl/maps/vRrmBGV2hUpgAYj88"
                >
                  Junction Rd, London, N19 5LF
                </a>
              </span>
            </div>
            <div className="social-media">
              <a href="#" className="icon-circle">
                <i className="icon"> </i>
              </a>
            </div>
          </div>
          <div className="contact__form-container form">
            <h4 className="form__title">Contact Form</h4>
            <form
              action="https://formsubmit.co/jahadmohamed@live.co.uk"
              method="POST"
              className="form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.co/thanks.html"
              />

              <div class="form-group">
                <input
                  type="text"
                  class="form__box"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  type="email"
                  class="form__box"
                  id="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>

              <textarea
                class="form__box message"
                rows="10"
                placeholder="Message"
                name="message"
                required
              ></textarea>

              <button
                class="form__box btn btn-primary send-button"
                id="submit"
                type="submit"
                value="Send"
              >
                <div class="alt-send-button">
                  <i class="fa fa-paper-plane"></i>
                  <span class="send-text">SEND</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
