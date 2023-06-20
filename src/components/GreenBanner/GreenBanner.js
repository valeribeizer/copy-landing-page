import React from "react";
import Number from "./Number";
import "./style.css";
import "../../app.css";

const GreenBanner = () => {
  const sign = ">21,";

  return (
    <div className="container gb-container">
      <div className="running-container">
        <div className="num-container">
          <h1 className="num">{sign}</h1>
          <Number n={465} />
        </div>
        <h4 className="text">jobs!</h4>
      </div>
      <h2 className="gb-h2" style={{ fontWeight: '400'}}>
        We successfully completed this number of jobs in 2022 with an
        outstanding average rating of 4.95!
      </h2>
    </div>
  );
};

export default GreenBanner;
