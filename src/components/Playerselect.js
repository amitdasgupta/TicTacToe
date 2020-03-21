import React, { useState, useEffect } from "react";
import { notification } from "antd";
import "antd/dist/antd.css";
import "../App.css";

function Playerselect(props) {
  const getPlayer = event => {
    console.log(event.target.value);
    setUser(event.target.value);
  };

  const [user, setUser] = useState("");

  const giveNextPage = () => {
    if (user == "") {
      notification.error({
        message: "Please select your side",
        description: "You need to pick a side to continue",
        style: {
          width: 600,
          marginLeft: 335 - 600
        }
      });
      return;
    }
    props.history.push({
      pathname: "/tictacttoe",
      state: { user: user }
    });
  };

  return (
    <div className="App">
      <header className="homepage">
        <div className="info">Pick your side</div>
        <div className="operations" style={{ marginTop: "55px" }}>
          <img src={require("../assets/close .svg")} className="ticimage" />
          <img src={require("../assets/circle.svg")} className="ticimage" />
        </div>
        <div onChange={getPlayer} className="radioselect">
          <input type="radio" value="X" name="ticvalue" />
          <input type="radio" value="0" name="ticvalue" />
        </div>
        <div className="buttons">
          <button
            style={{
              background: "white",
              borderWidth: "0",
              marginTop: "40px"
            }}
            onClick={giveNextPage}
          >
            Continue
          </button>
        </div>
      </header>
    </div>
  );
}

export default Playerselect;
