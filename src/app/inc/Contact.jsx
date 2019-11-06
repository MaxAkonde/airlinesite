import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <article className="col2 pad_left1">
        <h2>Contact Form</h2>
        <form id="ContactForm" action="#">
          <div>
            <div className="wrapper">
              <div className="bg">
                <input type="text" className="input" />
              </div>
              Your Name:
              <br />
            </div>
            <div className="wrapper">
              <div className="bg">
                <input type="text" className="input" />
              </div>
              Your E-mail:
              <br />
            </div>
            <div className="wrapper">
              <div className="bg">
                <textarea name="textarea" cols="1" rows="1"></textarea>
              </div>
              Your Message:
              <br />
            </div>
            <Link to="#" className="button1">
              submit
            </Link>{" "}
            <Link to="#" className="button1">
              reset
            </Link>{" "}
          </div>
        </form>
      </article>
    );
  }
}

export default Contact;
