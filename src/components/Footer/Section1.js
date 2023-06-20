import React from "react";
import "./style.css";

const Section1 = (props) => {
  return (
    <div className="section-1-container">
      <img className="logo-footer" src={props.src} alt={props.alt} />
      <div className="info">
        <h4 style={{ color: "#656F8B" }}>{props.title}</h4>
        <h5 className="h5-footer">{props.phone}</h5>
        <h5 className="h5-footer">{props.email}</h5>
        <h5 className="h5-footer">{props.address}</h5>
      </div>
      <div className="info">
        <h4 style={{ color: "#656F8B" }}>{props.title1}</h4>
        <h5 className="h5-footer">{props.hours}</h5>
      </div>
    </div>
  );
};

export default Section1;
