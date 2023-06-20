import React from "react";
import "./style.css";
import "../../app.css";

const HPCard = (props) => {
    return (
        <div className='card-container'>
            <img className="card-img" src={props.src} alt={props.alt}/>
            <h3 className="card-h3" style={props.style}>{props.title}</h3>
            <h6 className="card-h6">{props.description}</h6>
        </div>
    )
}

export default HPCard;