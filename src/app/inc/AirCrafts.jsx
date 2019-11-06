import React, { Component } from "react";
import { Link } from "react-router-dom";

class AirCrafts extends Component {
  render() {
    return (
      <article className="col2 pad_left1">
        <h2>Aircraft Sales</h2>
        <div className="wrapper">
          <figure className="left marg_right1">
            <img src="images/page2_img1.jpg" alt="" />
          </figure>
          <p>
            <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae.
          </p>
        </div>
        <p>
          Vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem:
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
        <div className="wrapper">
          <Link to="#" class="button1">
            Read More
          </Link>
        </div>
        <h2>Aircraft Management</h2>
        <div className="wrapper">
          <figure className="right marg_left1">
            <img src="images/page2_img2.jpg" alt="" />
          </figure>
          <p>
            <strong>At vero eos et accusamus</strong> et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excep- turi sint occaecati
            cupiditate.
          </p>
          <p>
            <strong>Non provident</strong>, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
            id quod maxime placeat facere possimus omnis.
          </p>
        </div>
      </article>
    );
  }
}

export default AirCrafts;
