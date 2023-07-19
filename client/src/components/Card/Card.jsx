import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="container">
        <div className="card">
          <div className="image">
            {item?.attributes.isNew && <span>New Season</span>}
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.img?.data.attributes.url
              }
              alt="Product"
              className="main-image"
            />
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.img2?.data.attributes.url
              }
              alt=""
              className="alt-image"
            />
          </div>

          <h2>{item?.attributes.title}</h2>

          <div className="prices">
            <h3>
              ${item?.attributes.oldPrice || item?.attributes.price * 1.2}
            </h3>
            <h3>${item?.attributes.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Card;
