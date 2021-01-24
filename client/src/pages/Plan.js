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
import "../styling/Plan.css"


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
        <Navigation />
        <Container>
            <Row>
                <Col></Col>
                <MortgageCalculator showPaymentSchedule />

                <Col></Col>
                <div className="box">
                    <br />

                    <h1 id="donuttext">Things to Ponder...</h1>
                    <ApexChart />
                    <br />
                    <Card style={{ width: "400px" }} id="donutbody" >
                        <Card.Body >It's always good to be prepared!If you're a first time buyer (or even if you're a little rusty!)here are some items to think about before you make an offer for your cool pad. </Card.Body>
                    </Card>

                    <br />

                    <h1 id="donuttext">Prep for your PAD</h1>
                    <SavingsModal />
                    <BarChart />


                    <Col></Col>


                </div>
            </Row>


            <Row>

            </Row>

        </Container>
        <Footer />

    </div>
);



export default Financial;