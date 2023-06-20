import React from "react";
import "./style.css";

const PhoneField = (props) => {
  return (
    <div className="fields-container">
      <label className="modal-label" htmlFor={props.name}>
        {props.labelName}
      </label>
      <input
        placeholder={props.placeholder}
        id={props.name}
        type={props.type}
        value={props.inputs[props.name]}
        onChange={(e) => {
          var x = e.target.value
            .replace(/\D/g, "")
            .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
          e.target.value = !x[2]
            ? x[1]
            : x[1] +
              "-" +
              x[2] +
              (x[3] ? "-" + x[3] : "") +
              (x[4] ? "-" + x[4] : "");

          const newValue = e.target.value;
          props.handleChange(props.name, newValue);
        }}
      />
      {props.errors[props.name] && (
        <span className="p-modal invalid">{props.errors[props.name]}</span>
      )}
    </div>
  );
};

export default PhoneField;
