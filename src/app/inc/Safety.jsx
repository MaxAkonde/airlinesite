import React, { Component } from "react";
import { Link } from "react-router-dom";

class Safety extends Component {
  render() {
    return (
      <article className="col2 pad_left1">
        <h2>About Safety</h2>
        <div className="wrapper">
          <figure className="left marg_right1">
            <img src="images/page3_img1.jpg" alt="" />
          </figure>
          <p>
            <strong>At vero eos et accusamus</strong> et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga quod maxime.{" "}
          </p>
        </div>
        <div className="wrapper">
          <figure className="left marg_right1">
            <img src="images/page3_img2.jpg" alt="" />
          </figure>
          <p>
            <strong>Et harum quidem rerum</strong> facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            Temporibus autem quibusdam et aut.
          </p>
        </div>
        <div className="wrapper">
          <Link to="#" class="button1">
            Read More
          </Link>
        </div>
        <h2>Safety Programs</h2>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus omnis assumenda est,
          omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
          debitis aut rerum:
        </p>
        <div className="wrapper pad_bot1">
          <ul className="list1 cols marg_right1">
            <li>
              <Link to="#">Lipsum quia dolor amet consectetur</Link>
            </li>
            <li>
              <Link to="#">Vdipisci velit, sed quia non numquam</Link>
            </li>
            <li>
              <Link to="#">Dius modi tempora incidunt</Link>
            </li>
            <li>
              <Link to="#">Uliquam quaerat voluptatem enim</Link>
            </li>
          </ul>
          <ul className="list1 cols">
            <li>
              <Link to="#">Quis nostrum exercitationem</Link>
            </li>
            <li>
              <Link to="#">Quis autem vel eum iure reprehender</Link>
            </li>
            <li>
              <Link to="#">Ullam corporis suscipit laboriosam</Link>
            </li>
            <li>
              <Link to="#">Nisi ut aliquid ex commodi</Link>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}

export default Safety;
