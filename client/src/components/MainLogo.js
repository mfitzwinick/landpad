import React from "react";

import logo from "../images/LogoL2.png";
import "../styling/MainLogo.css"


const MainLogo = () => {
    return (

        <div className="logo">
          <img src={logo}/>
        </div>
    );

}

export default MainLogo;