import React from "react";
import ReactDOM from "react-dom";

import Chart from "./components/Chart";

import './styles.css'

const App = () => {
  return (
    <div className="App">
      <Chart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
