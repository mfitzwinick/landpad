import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children }) {
    return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;