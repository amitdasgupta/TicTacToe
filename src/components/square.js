import React, { useState, useEffect } from "react";
import "../App.css";
import cross from "../assets/close .svg";
import circle from "../assets/circle.svg";
function Square(props) {
  return (
    <div
      className={props.set ? "square giveRight" : "square"}
      onClick={props.handleClick}
    >
      {props.val && (
        <img src={props.val == "X" ? cross : circle} className="ticimage" />
      )}
    </div>
  );
}

export default Square;
