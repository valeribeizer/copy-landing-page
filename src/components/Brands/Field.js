import React from "react";
import "./style.css";

const Field = (props) => {
  return (
    <div className="fields-container">
      <label className="modal-label" htmlFor={props.name}>
        {props.labelName}
      </label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        id={props.name}
        value={props.inputs[props.name]}
        onChange={(e) => {
          const newValue = e.target.value;
          props.handleChange(props.name, newValue);
        }}
      />
    </div>
  );
};

export default Field;
