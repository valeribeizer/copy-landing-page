import React from "react";
import BrandItem from "./BrandItem";
import "./style.css";
import "../../app.css";

const Brands = () => {
  const images = [
    "brands/a.png",
    "brands/b.png",
    "brands/c.png",
    "brands/d.png",
  ];

  const images1 = [
    "brands/e.png",
    "brands/f.png",
    "brands/g.png",
    "brands/h.png",
  ];

  const images2 = [
    "brands/i.png",
    "brands/j.png",
    "brands/k.png",
    "brands/l.png",
  ];

  const images3 = [
    "brands/m.png",
    "brands/n.png",
    "brands/o.png",
    "brands/p.png",
  ];

  const images4 = ["brands/q.png", "brands/r.png", "brands/s.png", "OTHER"];

  return (
    <div className="container brands-container" id="BR">
      <h2 className="brands-h2">
        <span style={{ color: "#039e2a" }}>Choose your brand</span> for expert
        repair — <br />
        We have vast experience with these brands!
      </h2>
      <h5 className="brands-h5">
        "In Stock and Ready to Serve: Extensive Spare Parts for Listed Brands of
        Household Appliances and HVAC systems — Popular and Less Known Brands
        Included!"
      </h5>
      <div className="row">
        {images.map((el, index) => (
          <BrandItem key={`${index}`} className="column" src={el} alt={index} />
        ))}
      </div>
      <div className="row">
        {images1.map((el, index) => (
          <BrandItem key={`${index}`} className="column" src={el} alt={index} />
        ))}
      </div>
      <div className="row">
        {images2.map((el, index) => (
          <BrandItem key={`${index}`} className="column" src={el} alt={index} />
        ))}
      </div>
      <div className="row">
        {images3.map((el, index) => (
          <BrandItem key={`${index}`} className="column" src={el} alt={index} />
        ))}
      </div>
      <div className="row">
        {images4.map((el, index) => (
          <BrandItem key={`${index}`} className="column" src={el} alt={index} />
        ))}
      </div>
      <div className="ps">
        <img className="light-img" src="light.png" alt="light" />
        <h5
          className="brands-h5"
          style={{ margin: "0 0 0 10px", width: "70%" }}
        >
          If you did not find the manufacturer of your household appliances in
          our list, this does not mean that we cannot repair it. Just contact us
          for professional advice and an appointment to call the master
        </h5>
      </div>
    </div>
  );
};

export default Brands;
