import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Carousel, Card, Button } from 'react-bootstrap'
import Accordion from "react-bootstrap/Accordion";
import "../styling/Resources.css"
import CarouselSlider from "../components/CarouselSlider";

function Resources() {
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
            <CarouselSlider />

            <div className="res-container">
                <h1 id="title">RESOURCES</h1>
                <p className="info">
                    Click on the category you'd like to learn a bit more about. We've provided some information
                    as to why the information might be of value to you as well as some resources you can start your
                    journey with.
                    </p>

                <Accordion id="accordian" defaultActiveKey="0">

                <Card className="color">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        BUYERS
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
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
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        SELLERS
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
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
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        REAL ESTATE AGENTS AND BROKERS
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="new-color">
                            <p>
                                More infomation to connect with in oder to make your next sell.
                            </p>
                            <ul>
                                <li className="resource"></li>
                                <li className="resource">
                                    <a className="res-link" href="http://www.mls.com/?gclid=Cj0KCQiAmL-ABhDFARIsAKywVac8EbNqN9pcZvJbwNTUiw2k5rXRS_pl_MwZNmTKmM6h9V1yd9c_9bEaAleyEALw_wcB" target="_blank" rel="noreferrer">MLS</a>
                                </li>  
                                <li className="resource"></li>
                                <li className="resource">
                                    <a className="res-link" href="https://www.zillow.com/?utm_medium=cpc&utm_source=google&utm_content=1471765354|65545421468|aud-352785741484:kwd-570802407|483599861957|&semQue=null&gclid=Cj0KCQiAmL-ABhDFARIsAKywVacA-rDsoj6sv5rLkL9aVQhMQ-LhdcRjaJGBVUeggrI4O636-tX2liYaAnRHEALw_wcB" target="_blank" rel="noreferrer">ZILLOW</a>
                                </li>  
                                <li className="resource"></li>
                                <li className="resource">
                                    <a className="res-link" href="https://www.redfin.com/?utm_source=google&utm_medium=ppc&utm_campaign=1022906&utm_term=aud-927891532985:kwd-844252101&utm_content=452206809549&adgid=105648829135" target="_blank" rel="noreferrer">REDFIN</a>
                                </li>  
                
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="color">
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        DESIGNERS
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="new-color">
                            <p>
                                Need a updated look for home, need ideas for your home decor or just your dealy fix of design. 
                            </p>
                            <ul>
                                <li className="resource"></li>
                                <li className="resource">
                                    <a className="res-link" href="https://https://www.dwell.com/" target="_blank" rel="noreferrer">Architecture Inspo</a>
                                </li>        
                                <li className="resource">
                                    <a className="res-link" href="https://www.interiordesign.net/" target="_blank" rel="noreferrer">Interior Design Inspo</a>
                                </li>    
                                <li className="resource">
                                    <a className="res-link" href="https://www.essentialhome.eu/inspirations/trends/" target="_blank" rel="noreferrer">Interior Trends</a>
                                </li>       
                                <li className="resource">
                                    <a className="res-link" href="http://www.essentialhome.eu/products?utm_source=blog&utm_meio=partnersfooter&utm_content=essentialhome-inspirationsblog-product&utm_campaign=midcentury" target="_blank" rel="noreferrer">Midcentury Furniture Ideas</a>
                                </li>    
                                <li className="resource">
                                    <a className="res-link" href="https://www.delightfull.eu/en/landing-page/mid-century-modern-style-partners?utm_source=website&utm_medium=partnersfooter&utm_content=essentialhome-inspirations-product&utm_campaign=midcentury" target="_blank" rel="noreferrer">Light Trends</a>
                                </li>    
                                <li className="resource">
                                    <a className="res-link" href="https://www.trendesignbook.com/?utm_source=website&utm_medium=partnersfooter&utm_content=essentialhome-inspirations-product&utm_campaign=brandawareness" target="_blank" rel="noreferrer">Home Trends</a>
                                </li>    <li className="resource">
                                    <a className="res-link" href="https://www.essentialhome.eu/inspirations/trends/" target="_blank" rel="noreferrer">Home Essentials</a>
                                </li>                   
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="color">
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        DEVELOPERS AND CONTRACTORS
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="new-color">
                            <p>
                            Regal Construction and Remodeling is an award-winning residential design-build general contractor in the Los Angeles area.
                            </p>
                            <ul>
                                <li className="resource"></li>
                                <li className="resource">
                                    <a className="res-link" href="https://www.nahb.org/" target="_blank" rel="noreferrer">Construction and Remodeling</a>
                                </li> 
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                </Accordion>
            </div>
            <Footer />
        </div>
    )

}


export default Resources;