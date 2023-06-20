import React from "react";
import HPCard from "../HomePage Card/HPCard";
import "./style.css";

const HPSlider = () => {
  return (
    <div className="container hpslider-container">
      <HPCard
        src="1.png"
        alt="1"
        title="Expert technicians"
        description="Our technicians are highly trained and experienced in repairing a wide range of home appliances and HVAC, ensuring quality and reliable repairs."
      />
      <HPCard
        src="2.png"
        alt="2"
        title="Convenient service"
        description="We offer flexible scheduling options and on-site repairs to minimize disruptions to your daily routine and save you time."
      />
      <HPCard
        src="3.png"
        alt="3"
        title="Affordable prices"
        description="Our repair services are affordably priced to provide you with cost-effective solutions without compromising on quality."
      />
      <HPCard
        style={{ marginTop: "32px" }}
        src="4.png"
        alt="4"
        title="Warranty"
        description="We stand behind our work with a warranty on parts and labor, giving you peace of mind and assurance that your appliance will be repaired properly."
      />
    </div>
  );
};

export default HPSlider;
