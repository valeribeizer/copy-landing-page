import React from "react";
import "./style.css";

const Section2 = (props) => {
  return (
    <div className="section-1-container">
      <div className="info">
        <h4 style={{ color: "#656F8B" }}>{props.title}</h4>
        {props.item.map((el, index) => (
          <a key={`${index}`} className="a-footer" href={`#${index}`}>
            <h5 className="h5-footer">{el}</h5>
          </a>
        ))}
      </div>
      <div className="info">
        <h4 style={{ color: "#656F8B" }}>{props.title1}</h4>
        {props.item1.map((el, index) => (
          <a key={`${index}`} className="a-footer" href={`#${index}`}>
            <h5 className="h5-footer">{el}</h5>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section2;
