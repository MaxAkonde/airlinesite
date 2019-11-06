import React from "react";
//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./app/inc/Home";
import AirCrafts from "./app/inc/AirCrafts";
import Safety from "./app/inc/Safety";
import Charters from "./app/inc/Charters";
import Contact from "./app/inc/Contact";
import Header from "./app/Header";
import Footer from "./app/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <section id="content">
          <article className="col1">
            <div className="pad_1">
              <h2>Your Flight Planner</h2>
              <form id="form_1" action="#" method="post">
                <div className="wrapper pad_bot1">
                  <div className="radio marg_right1">
                    <input type="radio" name="name1" />
                    Round Trip
                    <br />
                    <input type="radio" name="name1" />
                    One Way{" "}
                  </div>
                  <div className="radio">
                    <input type="radio" name="name1" />
                    Empty-Leg
                    <br />
                    <input type="radio" name="name1" />
                    Multi-Leg{" "}
                  </div>
                </div>
                <div className="wrapper">
                  {" "}
                  Leaving From:
                  <div className="bg">
                    <input
                      type="text"
                      class="input input1"
                      value="Enter City or Airport Code"
                      onBlur="if(this.value=='') this.value='Enter City or Airport Code'"
                      onFocus="if(this.value =='Enter City or Airport Code' ) this.value=''"
                    />
                  </div>
                </div>
                <div className="wrapper">
                  {" "}
                  Going To:
                  <div className="bg">
                    <input
                      type="text"
                      className="input input1"
                      value="Enter City or Airport Code"
                      onBlur="if(this.value=='') this.value='Enter City or Airport Code'"
                      onFocus="if(this.value =='Enter City or Airport Code' ) this.value=''"
                    />
                  </div>
                </div>
                <div className="wrapper">
                  {" "}
                  Departure Date and Time:
                  <div className="wrapper">
                    <div className="bg left">
                      <input
                        type="text"
                        className="input input2"
                        value="mm/dd/yyyy "
                        onBlur="if(this.value=='') this.value='mm/dd/yyyy '"
                        onFocus="if(this.value =='mm/dd/yyyy ' ) this.value=''"
                      />
                    </div>
                    <div className="bg right">
                      <input
                        type="text"
                        className="input input2"
                        value="12:00am"
                        onBlur="if(this.value=='') this.value='12:00am'"
                        onFocus="if(this.value =='12:00am' ) this.value=''"
                      />
                    </div>
                  </div>
                </div>
                <div class="wrapper">
                  {" "}
                  Return Date and Time:
                  <div className="wrapper">
                    <div className="bg left">
                      <input
                        type="text"
                        className="input input2"
                        value="mm/dd/yyyy "
                        onBlur="if(this.value=='') this.value='mm/dd/yyyy '"
                        onFocus="if(this.value =='mm/dd/yyyy ' ) this.value=''"
                      />
                    </div>
                    <div class="bg right">
                      <input
                        type="text"
                        className="input input2"
                        value="12:00am"
                        onBlur="if(this.value=='') this.value='12:00am'"
                        onFocus="if(this.value =='12:00am' ) this.value=''"
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <p>Passenger(s):</p>
                  <div className="bg left">
                    <input
                      type="text"
                      className="input input2"
                      value="# passengers"
                      onBlur="if(this.value=='') this.value='# passengers'"
                      onFocus="if(this.value =='# passengers' ) this.value=''"
                    />
                  </div>
                  <Link to="#" className="button2">
                    go!
                  </Link>{" "}
                </div>
              </form>
              <h2>Recent News</h2>
              <p className="under">
                <Link to="#" className="link1">
                  Nemo enim ipsam voluptatem quia
                </Link>
                <br />
                November 5, 2010
              </p>
              <p className="under">
                <Link to="#" className="link1">
                  Voluptas aspernatur autoditaut fjugit
                </Link>
                <br />
                November 1, 2010
              </p>
              <p>
                <Link to="#" className="link1">
                  Sed quia consequuntur magni
                </Link>
                <br />
                October 23, 2010
              </p>
            </div>
          </article>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aircrafts" exact component={AirCrafts} />
            <Route path="/safety" exact component={Safety} />
            <Route path="/charters" exact component={Charters} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </section>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
