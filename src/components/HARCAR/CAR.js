import React from 'react';
import BtnElement from './BtnElement';
import './style.css';
import "../../app.css";

const CAR = () => {
    const namesArray = [
      { name: "Refrigeration  Units", description: "11" },
      { name: "Commercial laundry appliance", description: "12" },
      { name: "Other commercial appliances", description: "13" },
    ];

    return (
      <div className="container har-container" id="CAR">
        <h2 className="har-h2">
          Commercial appliance
          <span style={{ color: "#313957", marginLeft: "6px" }}>repair</span>
        </h2>
        <div className="btn-container btn-container-car">
            {namesArray.map(({ name, description }, index) => (
              <BtnElement key={`${index}`} name={name} description={description} />
            ))}
          </div>
      </div>
    );
}

export default CAR;