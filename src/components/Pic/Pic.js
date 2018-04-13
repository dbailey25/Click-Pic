import React from "react";
import "./Pic.css";


const Pic = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.shuffle(props.friends)}/>
    </div>
  </div>
);

export default Pic;
