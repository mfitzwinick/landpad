import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "../styling/Resources.css"
import { Carousel } from "react-bootstrap";

function Resources() {
    return (

        <div>
            <Navigation />
            <Carousel />
                <h1 id="title">RESOURCES</h1>
                    <p className="info">
                        Click on the category you'd like to learn a bit more about. We've provided some information
                        as to why the information might be of value to you as well as some resources you can start your
                        journey with.
                    </p>

                <Accordion id="accordian" defaultActiveKey="0">
                   
                    <Card className="color">
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            DATA SOURCING
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body className="new-color">
                            <p>
                                Data sources are good for those willing to put in the research to ensure the investment they are
                                making in both the location and home they choose are worth the time, effort, and money. Small things such as
                                living in an area that has a university nearby, having a major highway run through a city, or the 
                                political views of the local population are things that can have an impact on a city's purchasing market. 
                                The following are some reputable sources that we recommend.
                            </p>
                            <ul>                                
                                <li className="resource">
                                    <a className="res-link" href="https://www.data.gov/" target="_blank" rel="noreferrer">Data.gov</a>
                                </li>
                                <li className="resource">
                                    <a className="res-link" href="https://datausa.io/" target="_blank" rel="noreferrer">Datausa.gov</a>
                                </li>
                                <li className="resource">
                                    <a className="res-link" href="https://www.va.gov/vetdata/maps.asp" target="_blank" rel="noreferrer">Va.gov</a>
                                </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="color">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            INVESTING
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body className="new-color">
                            <p>
                                While investing is not at the forefront of most future homeowner's minds, it's a great way to
                                generate passive income and work toward the home or investment you're seeking. The following are 
                                some great starting points for investing.
                            </p>
                            <ul>                                
                                <li className="resource">
                                    <a className="res-link" href="https://robinhood.com/us/en/" target="_blank" rel="noreferrer">RobinHood</a>
                                </li>
                                <li className="resource">
                                    <a className="res-link" href="https://www.nerdwallet.com/article/investing/401k-asset-allocation" target="_blank" rel="noreferrer">Invest in your 401K</a>
                                </li>
                                <li className="resource">
                                    Invest in <a className="res-link" href="https://www.nerdwallet.com/article/investing/how-to-invest-in-index-funds" target="_blank" rel="noreferrer">Index Funds </a>
                                     or<a className="res-link" href="https://www.nerdwallet.com/article/investing/what-is-an-etf" target="_blank" rel="noreferrer"> ETF's</a>

                                </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="color">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            ???MORTGAGE OR SOMETHING HELP???
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="new-color">
                            <ul>
                                <li className="resource"></li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            <Footer />
        </div>
    )

}


export default Resources;