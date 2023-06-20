import React from "react";
import "./style.css";

const Section4 = (props) => {
  return (
    <div className="section-4-container">
      <div className="info">
        <h4 style={{ color: "#656F8B" }}>{props.title}</h4>
        <input className="input-footer" placeholder="(XXX) XXX - XXX" />
        <button className="btn-footer">{props.btnName}</button>
      </div>
    </div>
  );
};

export default Section4;
