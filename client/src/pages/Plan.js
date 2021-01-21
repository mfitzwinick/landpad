import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MortgageCalculator from "mortgage-calculator-react";
import "../styling/Plan.css"
import customStyle from '../styling/DefaultStyle.css'
import ApexChart from "../components/ApexChart"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SavingsModal from "../components/SavingsModal";


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

                    <h1 id="donuttext">PROGRESS toward your PAD</h1>
                    <ApexChart />
                    <SavingsModal />

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