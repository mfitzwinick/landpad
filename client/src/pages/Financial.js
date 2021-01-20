import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MortgageCalculator from "mortgage-calculator-react"
import "../styling/Financial.css"
import ApexChart from "../components/ApexChart"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function Financial() {
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
                    <br />

                    <h1 id="donuttext">PLAN YOUR FUTURE</h1>
                    <ApexChart />
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