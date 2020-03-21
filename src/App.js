import React from "react";
import Homepage from "./components/Homepage";
import Playerselect from "./components/Playerselect";
import Tictac from "./components/TicTacToe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/playerselect" component={Playerselect} />
          <Route exact path="/tictacttoe" component={Tictac} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
