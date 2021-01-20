import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MortgageCalculator from "mortgage-calculator-react"
import "../styling/Financial.css"
import ApexChart from "../components/ApexChart"



function Financial() {
    return reactElement
}


const reactElement = (
    <div>
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

    </div>
);



export default Financial;