import React from "react";
import "./Message.css";

const Main = props => <div className={`message ${props.result}`}>{props.message}</div>;

export default Main;
