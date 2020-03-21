import React, { useState, useEffect } from "react";
import Square from "./square";
import { notification } from "antd";
import "antd/dist/antd.css";
import { SmileOutlined } from "@ant-design/icons";
import "../App.css";

const findWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
        isDraw: false
      };
    }
  }
  let isDraw = true;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      isDraw = false;
    }
  }
  return {
    winner: null,
    line: null,
    isDraw: isDraw
  };
};

function Tictac(props) {
  //   console.log("main page", props.location.state.user);
  const mainUser = props.location.state.user;
  const nextUser = mainUser == "X" ? "0" : "X";
  const [square, setSquares] = useState(Array(9).fill(null));
  const [isNext, setNext] = useState(false);

  const winnerData = findWinner(square);

  useEffect(() => {
    if (winnerData.isDraw) {
      notification.open({
        message: "Game draw man",
        description: "Try to play again",
        style: {
          width: 600,
          marginLeft: 335 - 600
        }
      });
    }

    if (winnerData.winner) {
      //   let message = mainUser == winnerData.findWinner ? "You won" : "You lost";

      let message = "";
      if (isNext) {
        message = "You won";
      } else message = "You lost";

      console.log(winnerData.winner, mainUser, message);
      notification.open({
        message: "We got the winner",
        description: message,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />
      });
    }
  });

  const handleClick = i => () => {
    if (winnerData.winner) {
      return;
    }
    if (square[i] != null) return;
    if (isNext) {
      square[i] = nextUser;
    } else {
      square[i] = mainUser;
    }
    setNext(!isNext);
    let squareNew = square.slice();
    setSquares(squareNew);
  };

  return (
    <div className="App">
      <header className="homepage">
        <div
          className="info"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div className={isNext ? "" : "activePlayer"}>Alex</div>
          <div className="score">0-0</div>
          <div className={isNext ? "activePlayer" : ""}>AI</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "25px",
            borderRadius: "18px",
            backgroundColor: "white"
          }}
        >
          <div className="row">
            <Square set={true} val={square[0]} handleClick={handleClick(0)} />
            <Square set={true} val={square[1]} handleClick={handleClick(1)} />
            <Square val={square[2]} handleClick={handleClick(2)} />
          </div>
          <div className="row">
            <Square set={true} val={square[3]} handleClick={handleClick(3)} />
            <Square set={true} val={square[4]} handleClick={handleClick(4)} />
            <Square val={square[5]} handleClick={handleClick(5)} />
          </div>
          <div className="row" style={{ borderBottom: "none" }}>
            <Square set={true} val={square[6]} handleClick={handleClick(6)} />
            <Square set={true} val={square[7]} handleClick={handleClick(7)} />
            <Square val={square[8]} handleClick={handleClick(8)} />
          </div>
        </div>

        <div className="settings">
          <img src={require("../assets/gear.svg")} />
        </div>
      </header>
    </div>
  );
}

export default Tictac;
