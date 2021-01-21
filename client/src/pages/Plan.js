import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MortgageCalculator from "mortgage-calculator-react";
<<<<<<< HEAD:client/src/pages/Plan.js
import "../styling/Plan.css"
=======
>>>>>>> 674670318dc78223c009a2da0b8cbe57c04488e8:client/src/pages/Financial.js
import customStyle from '../styling/DefaultStyle.css'
import ApexChart from "../components/ApexChart"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SavingsModal from "../components/SavingsModal";
import BarChart from "../components/BarChart";


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

                    <h1 id="donuttext">Things to Ponder...</h1>
                    <ApexChart />
                    <br />
                    <Card>
                        <Card.Body id="donutbody" >It's always good to be prepared!If you're a first time buyer (or even if you're a little rusty!)here are some items to think about before you make an offer for your cool pad. </Card.Body>
                    </Card>

                    <br />

                    <h1 id="donuttext">Prep for your PAD</h1>
                    <BarChart />
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