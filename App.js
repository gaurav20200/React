import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Namaste  React");
//babel package transpiles
const Header=()=>{
   return(
    <div className="header">
          <div className="logo-container">
            <img className="logo" src="data:image/png;base64,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"/>
          </div>
          <div className="nav-items"> 
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
          </div>

    </div>
   ) 
}

const RestaurantCard=(props)=>{
    return(
<div className="res-card" style={{backgroundColor:"#f0f0f0"}}> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQ3ZNFOB7MnlImwHYloJaJcs_AtpzYR5UFnE7-Pxp&s"/>
    <h3>{props.resName}</h3>
    <h4>{props.cuisine}</h4>
    <h4>4 stars</h4>
    <h4>Dehradun</h4>
</div>
    );
}

const Body=()=>{
return(
    <div className="body">
<div className="search">
Search
</div>
<div className="res-container">
<RestaurantCard
resName="Gaurav Foods"
cuisine="Indian, Chinese"
/>
<RestaurantCard resName="KFC" cuisine="Chicken"/>

</div>
    </div>
)
}


const AppLayout=()=>{
    return(
        <div className="app">
<Header/>
<Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 
