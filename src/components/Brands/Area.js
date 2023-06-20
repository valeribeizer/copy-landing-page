import React from "react";
import "./style.css";

const Area = (props) => {
  const ln = props.inputs[props.name].trim().length;
  return (
    <div className="fields-container">
      <label className="modal-label" htmlFor={props.name}>
        {props.labelName}
      </label>
      <textarea
        placeholder={props.placeholder}
        rows="5"
        id={props.name}
        value={props.inputs[props.name]}
        onChange={(e) => {
          props.handleChange(props.name, e.target.value);
        }}
      />
      {ln <= 400 ? (
        <span className="p-modal">{ln} / 400 characters</span>
      ) : (
        <span className="p-modal invalid">{ln} / 400 characters</span>
      )}
    </div>
  );
};

export default Area;
