import React from "react";
import "./style.css";

const Rating = (props) => {
    return (
      <div className="container-rating">
        <img className="logo" src={props.src} alt={props.alt} />
        <div className="star-group">{props.stars}</div>
        <span className="rating">{props.rating}</span>
      </div>
    );
}

export default Rating;