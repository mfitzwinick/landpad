import React from "react";

import logo from "../images/LogoL2.png";
import "../styling/MainLogo.css"


const MainLogo = (props) => {
    return (

        <div>
          <img id={props.origin === "login" ? "main-logo-login" : "main-logo-navbar"} src={logo}/>
        </div>
    );

}

export default MainLogo;