import React from "react";
import "../App.css";

function Homepage(props) {
  const giveNextPage = () => {
    props.history.push("/playerselect");
  };

  return (
    <div className="App">
      <header className="homepage">
        <div className="operations">
          <img src={require("../assets/close .svg")} className="ticimage" />
          <img src={require("../assets/circle.svg")} className="ticimage" />
        </div>
        <div className="info">Choose your play mode</div>
        <div className="buttons">
          <button
            style={{
              background: "linear-gradient(6deg, #935ef1, #5904da00)",
              borderWidth: "0"
            }}
            onClick={giveNextPage}
          >
            With AI
          </button>
          <button
            style={{
              background: "white",
              borderWidth: "0"
            }}
            onClick={giveNextPage}
          >
            With a friend
          </button>
        </div>
        <div className="settings">
          <img src={require("../assets/gear.svg")} />
        </div>
      </header>
    </div>
  );
}

export default Homepage;
