import React from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";

const SlideShow = () => {
  const indicator = () => (
    <div className="indicator" style={{ marginRight: "5px" }}></div>
  );

  const properties = {
    prevArrow: (
      <button className="btn-custom btn-custom-1">
        <img className="upper-arrow" src="upperArrow.png" alt="upper_arrow" />
      </button>
    ),
    nextArrow: (
      <button className="btn-custom btn-custom-2">
        <img
          className="upper-arrow bottom-arrow"
          src="bottomArrow.png"
          alt="bottom_arrow"
        />
      </button>
    ),
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "600px",
    borderRadius: "16px",
  };

  const slideImages = [
    {
      url: "img1.webp",
    },
    {
      url: "img2.png",
    },
    {
      url: "img3.avif",
    },
  ];

  return (
    <div className="slideshow-container">
      <Slide indicators={indicator} {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
