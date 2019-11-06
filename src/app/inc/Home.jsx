import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <article className="col2 pad_left1">
        <h2>Welcome to our Website!</h2>
        <p className="color1">
          Aliquefauctor ac nulla ant vestibulum ris sed tincidunt pede ut
          faucibus. Necpellus vel orci pede justo eros elit eget tellus ero
          nunc. Hendnibh pretium nec lorem tor tempus vel nibh urna quis morbi.
        </p>
        <p className="color1">
          Maecenatoquetamet tempus arcu adipis duis partur convallisi sed eget
          et inte. Fauctormassa ligula por nam velit id eros et curabitudin
          dolor id.
        </p>
        <div className="marker">
          <div className="wrapper">
            <p className="pad_bot2">
              <strong>Aircraft</strong>
            </p>
            <p className="pad_bot2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </div>
        </div>
        <div className="wrapper pad_bot2">
          <Link to="#" className="button1">
            Read More
          </Link>
        </div>
        <div className="marker">
          <div className="wrapper">
            <p className="pad_bot2">
              <strong>Charters</strong>
            </p>
            <p className="pad_bot2">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
        </div>
        <div className="wrapper pad_bot2">
          {" "}
          <Link to="#" className="button1">
            Reservation
          </Link>{" "}
          <Link to="#" className="button2">
            Fleet
          </Link>{" "}
        </div>
        <div className="wrapper">
          <article className="cols">
            <h2>Our Clients</h2>
            <p>
              <strong>Avero eoset</strong> accusamus et iusto odio dig- nissimos
              ducimus qui blanditiis praesentium voluptatum deleniti.
            </p>
            <p>
              Atque corrupti quos dolores et quas moles- tias excepturi sint{" "}
              <Link to="#">occaecati cupiditate</Link> non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum
              et dolorum fuga.
            </p>
          </article>
          <div className="box1">
            <div className="pad_1">
              <div className="wrapper">
                <p className="pad_bot2">
                  Lorem ipsum dolor sit amet, consectetur adip- isicing elit,
                  sed do eius- mod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis{" "}
                </p>
                <p>
                  <span className="right">Mr. Thomas Lloyd</span>&nbsp;
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Home;
