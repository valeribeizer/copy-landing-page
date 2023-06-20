import React, { useState } from "react";
import Field from "./Field";
import PhoneField from "./PhoneField";
import Area from "./Area";
import "./style.css";
import "../../app.css";
import { validation } from "../../helpers/validation";

const Modal = (props) => {

  const initialState = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (input, value) => {
    setInputs((prev) => ({ ...prev, [input]: value.trimStart() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validation(inputs);
    setErrors(error);
    if (!Object.values(error).length) {
      setSent(true);
    }
    setInputs(initialState);
  };

    return (
      <div className="modal-container">
        {props.src.endsWith("png") ? (
          <img className="modal-img" src={props.src} alt="brand" />
        ) : (
          <h3 style={{ margin: '0 0 5% 18%'}}>CONTACT FORM</h3>
        )}

        <Field
          labelName="Name"
          type="text"
          name="name"
          placeholder="Enter your full name (optional)"
          inputs={inputs}
          errors={errors}
          handleChange={handleChange}
        />
        <PhoneField
          labelName="Phone Number*"
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          inputs={inputs}
          errors={errors}
          handleChange={handleChange}
        />
        <Field
          labelName="Email"
          type="email"
          name="email"
          placeholder="Enter your email (optional)"
          inputs={inputs}
          errors={errors}
          handleChange={handleChange}
        />
        <Area
          labelName="Message"
          name="message"
          placeholder="Your message here (optional)"
          inputs={inputs}
          errors={errors}
          handleChange={handleChange}
        />
        {sent && (
          <p className="p-modal">
            Your message has been sent! We will contact you ASAP!
          </p>
        )}
        <div className="btns-modal">
          <button className="btn-modal" onClick={handleSubmit}>
            Send
          </button>
          <button className="btn-modal" onClick={props.onClick}>
            Close
          </button>
        </div>
      </div>
    );
  };

export default Modal;
