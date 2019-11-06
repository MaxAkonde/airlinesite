/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="body1">
          <div className="main">
            <header>
              <div className="wrapper">
                <h1>
                  <a href="#" id="logo">
                    AirLines
                  </a>
                  <span id="slogan">International Travel</span>
                </h1>
                <div className="right">
                  <nav>
                    <ul id="top_nav">
                      <li>
                        <Link to="#">
                          <img src="images/img1.gif" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src="images/img2.gif" alt="" />
                        </Link>
                      </li>
                      <li className="bg_none">
                        <Link to="#">
                          <img src="images/img3.gif" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul id="menu">
                      <li id="menu_active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/aircrafts">Our Aircraft</Link>
                      </li>
                      <li>
                        <Link to="#">Safety</Link>
                      </li>
                      <li>
                        <Link to="#">Charters</Link>
                      </li>
                      <li>
                        <Link to="#">Contacts</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="main">
          <div id="banner">
            <div className="text1">
              {" "}
              COMFORT<span>Guaranteed</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Link href="#" class="button_top">
              Order Tickets Online
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
