import React from "react";
import ReactDOM from "react-dom";
require("./styles.scss");

import Game from "./game.jsx";

Math.randomBetween = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1) + a);
};

Array.prototype.remove = function(element) {
  return this.filter(el => el !== element);
};

ReactDOM.render(<Game />, document.getElementById("game"));
