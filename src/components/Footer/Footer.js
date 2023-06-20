import React from "react";
import "./style.css";
import "../../app.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Footer = () => {
  const data1 = {
    title: "Contacts",
    phone: "(240) 630-079",
    email: "example@abvboston.com",
    address: "4977 Battery Ln, Bethesda, MD 20814",
    title1: "Working Hours",
    hours: "Mon - Sun 8:00 am - 6:00 pm",
  };

  const title = "Home appliance repair";
  const title1 = "Commercial appliance repair";
  const title2 = 'HVAC';
  const title3 = 'Do you still have questions?';

  const item = [
    "Refrigerator",
    "Oven",
    "Rango",
    "Dishwasher",
    "Washer",
    "Dryer",
  ];

  const item1 = [
    "Refrigeration units",
    "Commercial kitchen",
    "Commercial laundry machine",
    "Commercial dishwasher",
    "Walk-in cooler",
    "Ice machine",
  ];

  const item2 = [
    "Central air conditioning",
    "Window and wall unit air conditioning",
    "Mini-split system",
    "Ductless system",
    "Heating repair and maintenance"
  ];

  const images = [
    "payments/1.png",
    "payments/2.png",
    "payments/3.png",
    "payments/4.png",
    "payments/5.png",
    "payments/6.png"
  ];

  return (
    <footer>
      <div className="footer-subcontainer">
        <Section1
          src="logo.svg"
          alt="logo"
          title={data1.title}
          phone={data1.phone}
          email={data1.email}
          address={data1.address}
          title1={data1.title1}
          hours={data1.hours}
        />
        <Section2 title={title} title1={title1} item={item} item1={item1} />
        <Section3 title={title2} item={item2} />
        <Section4 title={title3} btnName={"Submit"} />
      </div>
      <div className="footer-subcontainer" style={{ marginTop: "20px" }}>
        <div className="clicks">
          <a className="a-footer" href="#terms">
            <h5 className="h5-footer">Terms and Conditions</h5>
          </a>
          <a className="a-footer" href="#privacy">
            <h5 className="h5-footer">Privacy Policy</h5>
          </a>
        </div>
        <div className="clicks-img">
          {images.map((el, index) => (
            <img
              key={`${index}`}
              src={el}
              alt={index}
              style={{ width: "40px", height: "25px" }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
