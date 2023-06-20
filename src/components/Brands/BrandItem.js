import React from "react";
import Popup from "reactjs-popup";
import "./style.css";
import "../../app.css";
import Modal from "./Modal";

const BrandItem = (props) => {
  return (
    <Popup
      trigger={
        <div className="brand-item-container">
          {props.src.endsWith("png") ? (
            <img className="brand-img" src={props.src} alt={props.alt} />
          ) : (
            <p className="brand-p">OTHER</p>
          )}
        </div>
      }
      modal
    >
      {(close) => (
        <div>
          <Modal
            src={props.src}
            onClick={() => {
              close();
            }}
          />
        </div>
      )}
    </Popup>
  );
};

export default BrandItem;
