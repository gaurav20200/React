import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"This is the heading1"),React.createElement("h2",{},"This is the heading2")]));
const heading = React.createElement("h1",{},"Hello World from React!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);