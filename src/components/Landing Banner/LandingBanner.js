import React from "react";
import Rating from "../Rating/Rating";
import "./style.css";
import "../../app.css";
import SlideShow from "../SlideShow/SlideShow";

const LandingBanner = () => {

  const starArray = Array(5).fill(<img style={{ paddingRight: '2px'}} src="star.png" alt="star" />);
  const yelpStarArray = Array(5).fill(
    <img style={{ paddingRight: "2px" }} src="yelp_star.png" alt="yelp_star" />
  );

  return (
    <div className="container landing-container" id="home">
      <div className="container-ld">
        <div className="text header-text">
          <p className="top">
            Fix it right, fix it fast with our expert appliance repair and HVAC
          </p>
          <h1 className="lp-h1">
            Same & Next Day{" "}
            <span style={{ color: "#039E2A" }}>
              <br />
              Appliance Repair and HVAC
            </span>{" "}
            <br />
            in Greater Boston area
          </h1>
        </div>
        <div className="text middle-text">
          <h5>
            Expert technicians, fast response, affordable prices, warranty on
            all repairs. Trust us to fix all your units quickly & correctly!
          </h5>
          <button className="btn-landing">Get quality service!</button>
        </div>
        <div className="text bottom-text">
          <h3>People love us</h3>
          <div className="feedback-group">
            <Rating
              src="google_logo.png"
              alt="google"
              stars={starArray}
              rating="4.9"
            />
            <Rating
              src="yelp_logo.png"
              alt="yelp"
              stars={yelpStarArray}
              rating="5.0"
            />
          </div>
          <div className="reviews">
            <hr className="line" />
            <p className="local-reviews">
              based on 700+{" "}
              <span style={{ color: "#039E2A" }}>local reviews</span>
            </p>
            <hr className="line closing" />
          </div>
        </div>
      </div>
      <SlideShow />
    </div>
  );
};

export default LandingBanner;
