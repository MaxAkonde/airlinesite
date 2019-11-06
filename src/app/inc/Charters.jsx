import React, { Component } from "react";
import { Link } from "react-router-dom";

class Charters extends Component {
  render() {
    return (
      <article className="col2 pad_left1">
        <h2>A Premier Air Charter Services Broker</h2>
        <div className="wrapper">
          <figure className="left marg_right1">
            <img src="images/page4_img1.jpg" alt="" />
          </figure>
          <p>
            <strong>Et harum quidem</strong> facilis est et expedita distinctio
            nam libero tempore, cum soluta nobis:
          </p>
          <ul className="list1 left pad_bot1">
            <li>
              <Link to="#">Est eligendi optio cumque nihil impedit quo</Link>
            </li>
            <li>
              <Link to="#">Minus id quod maxime placeat facere possimus</Link>
            </li>
            <li>
              <Link to="#">Omnis voluptas assumenda est</Link>
            </li>
          </ul>
        </div>
        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis.
        </p>
        <div className="wrapper">
          <Link href="#" className="button1">
            Read More
          </Link>
        </div>
        <h2>Aircraft for Charter</h2>
        <div className="wrapper">
          <figure className="left marg_right1">
            <img src="images/page4_img2.jpg" alt="" />
          </figure>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus omnis assumenda.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fugat harum quidem rerum.
          </p>
        </div>
      </article>
    );
  }
}

export default Charters;
