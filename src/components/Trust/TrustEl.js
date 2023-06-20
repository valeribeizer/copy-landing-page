import React from 'react';
import './style.css';

const TrustEl = (props) => {
    return (
      <div className="trustel-container">
        <div className="trustel-num">{props.num}</div>
        <div className="data-container">
          <h3 className="trustel-h3">{props.title}</h3>
          <h6 className="trustel-h6">{props.desc}</h6>
        </div>
      </div>
    );
}

export default TrustEl;