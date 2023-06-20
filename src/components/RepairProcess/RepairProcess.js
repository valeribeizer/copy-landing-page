import React from "react";
import FieldEl from "./FieldEl";
import "./style.css";
import "../../app.css";

const RepairProcess = () => {
  const data = [
    { title: "Scheduling an appointment", desc: "Description here" },
    { title: "Inspection", desc: "Description here" },
    { title: "Fixing", desc: "Description here" },
    { title: "Evaluation", desc: "Description here" },
    { title: "Post-repair tidying up", desc: "Description here" },
    { title: "Maintenance advice", desc: "Description here" },
  ];

  return (
    <div className="container repair-process-container">
      <div className="img-container">
        <img className="rp-img" src="img2.png" alt="img2" />
      </div>
      <div className="rp-desc-container">
        <h2 className="rp-h2">
          Efficient and transparent <br />
          <span style={{ color: "#039e2a" }}>repair process</span>
        </h2>
        <h5 className="rp-h5">
          We understand the stress that comes with a broken unit, which is why
          we strive to provide a fast and convenient repair process for you. We
          prioritize transparency and aim to make the experience as stress-free
          as possible.
        </h5>
        {data.map(({ title, desc }, index) => (
          <FieldEl
            key={`${index}`}
            number={`0${index + 1}`}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};

export default RepairProcess;
