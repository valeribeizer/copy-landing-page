import React from "react";
import "./style.css";
import "../../app.css";
import TrustEl from "./TrustEl";

const Trust = () => {
  const data = [
    {
      num: "01",
      title: "Our reputation speaks for itself",
      desc: "Choose us for all your appliance repair needs. With years of experience and a commitment to exceptional service, you can trust us to deliver outstanding results every time.",
    },
    {
      num: "03",
      title: "Convenient and efficient service",
      desc: "Fast response times and on-site repairs to minimize downtime and get your appliances up and running quickly.",
    },
  ];

  const data2 = [
    {
      num: "02",
      title: "Certified and experienced technicians",
      desc: "Trained professionals equipped with the latest tools and techniques to diagnose and repair any appliance issue.",
    },
    {
      num: "04",
      title: "Affordable and guaranteed repairs",
      desc: "Competitive pricing and a satisfaction guarantee for a hassle-free and confidence-inspiring repair experience.",
    },
  ];

  return (
    <div className="container trust-container" id="HR">
      <h2 className="trust-h2">
        Why do{" "}
        <span style={{ color: "#039e2a" }}>people trust our company</span>
        <br /> for the repair of appliances and HVAC systems?
      </h2>
      <div className="line-trust" />
      <div className="row-subcontainer">
        <TrustEl num={data[0].num} title={data[0].title} desc={data[0].desc} />
        <div className="line-trust-2" />
        <TrustEl num={data[1].num} title={data[1].title} desc={data[1].desc} />
      </div>
      <div className="line-trust" />
      <div className="row-subcontainer">
        <TrustEl num={data2[0].num} title={data2[0].title} desc={data2[0].desc} />
        <div className="line-trust-2" />
        <TrustEl num={data2[1].num} title={data2[1].title} desc={data2[1].desc} />
      </div>
    </div>
  );
};

export default Trust;
