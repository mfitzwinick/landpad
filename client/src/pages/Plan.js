import React, { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MortgageCalculator from "mortgage-calculator-react";
import '../styling/DefaultStyle.css'
import ApexChart from "../components/ApexChart"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SavingsModal from "../components/SavingsModal";
import BarChart from "../components/BarChart";
import Image from 'react-bootstrap/Image'
import "../styling/Plan.css"
import pool from "../images/pool.jpg"


function Financial() {
    // const [user, setUser] = useState();
    // const history = useHistory();
    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setUser(localStorage.getItem("token"))
    //     } else {
    //         history.push("/")
    //     }
    // }, [])
    return reactElement
}


const reactElement = (
    <div>
        <Row>
            <Navigation />
        </Row>

        <br />
        <Row>
            <Col>
                <div id="calculator">
                    <MortgageCalculator showPaymentSchedule />
                </div>
            </Col>
            <Col>

                <div className="chartbox">
                    <br />

                    <h1 id="donuttext">Things to Ponder...</h1>
                    <ApexChart />
                    <br />
                    <Card style={{ width: "400px" }} id="donutbody" >
                        <Card.Body >
                            <h5 style={{ fontStyle: "italic" }}>HOW MUCH DO I NEED TO HAVE SAVED TO GET STARTED?</h5>
                            <p>It's always good to be prepared!  Thinking through what you need to get started is a good idea.  Whether your are offering 10-20% down, here are additional costs to think about before you make an offer for your cool pad. </p></Card.Body>
                    </Card>

                    <br />

                    <h1 id="donuttext">Prep for your PAD</h1>
                    <SavingsModal />
                    <BarChart />
                </div>
                <Image id="pool"
                    alt="pool"
                    width={500}
                    height={350}
                    src={pool}>
                </Image>
            </Col>


        </Row >



        <Footer />

    </div >
);



export default Financial;