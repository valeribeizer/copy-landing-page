import React, { useState } from "react";
import "./style.css";
import "../../app.css";

const FieldEl = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        open ? "field-container field-container-open" : "field-container"
      }
    >
      <div className="panel fe-panel">
        <div
          className={
            open ? "fe-num-container fe-num-container-open" : "fe-num-container"
          }
        >
          <p className={open ? "fe-p-open" : "fe-p"}>{props.number}</p>
        </div>
        <h4 className={open ? "fe-h4 fe-h4-open" : "fe-h4"} onClick={toggle}>
          {props.title}
        </h4>
      </div>
      {open && <h6 className="fe-h6">{props.desc}</h6>}
    </div>
  );
};

export default FieldEl;
