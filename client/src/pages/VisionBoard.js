import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import VisionBoardCards from "../components/VisionBoardCard";
function VisionBoard () {
return (

        <div>
            <Navigation />
                <VisionBoardCards />
            <Footer />
        </div>
    )

}


export default VisionBoard;