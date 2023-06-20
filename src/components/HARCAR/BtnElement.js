import React, { useState } from "react";
import "./style.css";
import "../../app.css";

const BtnElement = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? "btn-area btn-area-open" : "btn-area"}>
      <div className="panel har-panel">
        <h4
          className={open ? "btn-area-h4 btn-area-h4-open" : "btn-area-h4"}
          onClick={toggle}
        >
          {props.name}
        </h4>
        <button
          className={open ? "btn btn-open" : "btn"}
        >
          {open ? (
            <img
              className="btn-area-img"
              src="btn-area-green.png"
              alt="arrow"
            />
          ) : (
            <img className="btn-area-img" src="btn-area.png" alt="arrow" />
          )}
        </button>
      </div>
      {open && <h6 className="btn-area-h6">{props.description}</h6>}
    </div>
  );
};

export default BtnElement;
