import React from "react";
import BtnElement from "./BtnElement";
import "./style.css";
import "../../app.css";

const HAR = () => {
  const namesArray = [
    {
      name: "Refrigrator repair",
      description:
        '"Need a reliable refrigerator repair in Boston? Contact us now for fast, affordable service."  "Our certified technicians can fix any make and model."',
    },
    { name: "Washer repair", description: "2" },
    { name: "Dryer repair", description: "3" },
    { name: "Cooktop repair", description: "4" },
    { name: "Range repair", description: "5" },
  ];

  const namesArray1 = [
    { name: "Stove repair", description: "6" },
    { name: "Dishwasher repair", description: "7" },
    { name: "Oven repair", description: "8" },
    { name: "Wine cooler repair", description: "9" },
    { name: "Freezer repair", description: "10" },
  ];

  return (
    <div className="container har-container" id="HAR">
      <h2 className="har-h2">
        Home appliance
        <span style={{ color: "#313957", marginLeft: "6px" }}>repair</span>
      </h2>
      <div className="btn-container">
        <div className="btn-subcontainer">
          {namesArray.map(({ name, description }, index) => (
            <BtnElement
              key={`${index}`}
              name={name}
              description={description}
            />
          ))}
        </div>
        <div className="btn-subcontainer">
          {namesArray1.map(({ name, description }, index) => (
            <BtnElement
              key={`${index}`}
              name={name}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HAR;
