import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Namaste  React");
//babel package transpiles

const root = ReactDOM.createRoot(document.getElementById("root"));
const Hola =() =>( (<h1>THis is best</h1>));
const HeadingComponent =() =>(<div id="container">
    <Hola/>   //one component insider another component is invoked this way
    {}     //curly braces can be used to run any javascript code 
<h1 className="head">welcome to mysdfdf f ssdfsfddfdsdfsfsffsdfds hsdfdsfouse</h1>
</div>);
const AnotherComponent = () =>(<div id="container">
<Hola/>   
<h1 className="tail">AnotherComponent is here</h1>
</div>);


root.render(<HeadingComponent/>); 
