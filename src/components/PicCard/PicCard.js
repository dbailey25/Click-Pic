import React from "react";
import "./PicCard.css";


const PicCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.shuffleIndexes(this.state.friends)}/>
    </div>
  </div>
);

export default PicCard;
