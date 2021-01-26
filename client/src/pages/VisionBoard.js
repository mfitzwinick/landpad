import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import VisionBoardCards from "../components/VisionBoardCard";


function VisionBoard() {

    const [user, setUser] = useState();
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setUser(localStorage.getItem("token"))
        } else {
            history.push("/")
        }
    }, [])
    return (

        <div>
            <Navigation />
            <VisionBoardCards />
            <Footer />
        </div>
    )

}


export default VisionBoard;