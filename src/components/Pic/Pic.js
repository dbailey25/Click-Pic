import React from "react";
import "./Pic.css";


const Pic = props => (
  <div className="card">
    <div className="img-container">
  {/*<img alt={props.id} src={props.image} onClick={() => props.clickIt(props.id, props.pics)}/>*/}
  <img alt={props.id} src={props.image} onClick={() => {props.score(props.id); props.shuffle(props.pics)}}/>
    </div>
  </div>
);

export default Pic;
