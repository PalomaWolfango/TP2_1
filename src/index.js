import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "react-leaflet-fullscreen/dist/styles.css";

import App from "./App";

window.process={};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
