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
                <h3 className="info">
                    Click on the category that applies to you. We've provided information
                    and resources just for you!
                    </h3>

                <Accordion id="accordian" defaultActiveKey="0">

                    <Card className="color accordian-header">
                        <Accordion.Toggle className="accordian-header" as={Card.Header} eventKey="1">
                            BUYERS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="new-color">
                                <p>
                                    Buying a home can be exciting and daunting at the same time.  Here are some tips for buyers who are just getting started:</p>
                                <ol>
                                    <li>Contact at least three mortgage lenders to ensure you’re getting the best rate. Many first-time home buyers make the mistake of going with the first lender they talk to, and they miss out on thousands of dollars of savings. </li>
                                    <li>Learn about different types of home loans. While there are dozens of loan types, more than 90 percent of buyers will end up using one of four major loan programs: Conventional, FHA, VA, or USDA. Find out which loan best fits your needs — there are options for low down payment, low credit score, self-employed, large loan size, and more. </li>
                                    <li>Understand your price range and monthly payment. Calculate your mortgage payment, including principal, interest, taxes, and insurance. Understand your mortgage rate as well as your budget. This will allow you to shop for a home and a mortgage with confidence. </li>
                                    <li>Remember to account for closing costs funds, inspection fees, and moving costs.</li>
                                    <li>If you are a veteran, you may be eligible for no money down loans.  Check benefits.va.gov for more information.</li>
                                </ol>

                                <ul>
                                    <li className="resource">Mortgage shopping worksheet:
                                    <a className="res-link" href="https://www.hud.gov/sites/documents/BOOKLET.PDF" target="_blank" rel="noreferrer">HOUSING AND URBAN DEVELOPMENT</a>
                                    </li>
                                    <li className="resource">For teachers and first responders:
                                    <a className="res-link" href="https://www.hud.gov/program_offices/housing/sfh/reo/goodn/gnndabot" target="_blank" rel="noreferrer">SPECIAL PROGRAMS OFFERED</a>
                                    </li>
                                    <li className="resource">Fair housing brochure:
                                        <a className="res-link" href="https://www.hud.gov/sites/documents/FHEO_BOOKLET_ENG.PDF" target="_blank" rel="noreferrer">KNOW YOUR RIGHTS</a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="color accordian-header">
                        <Accordion.Toggle className="accordian-header" as={Card.Header} eventKey="2">
                            SELLERS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="new-color">
                                <h3>
                                    Preparing to sell your home typically takes some work, whether that is work you put in yourself, or making some professional improvements.
                                </h3>
                                <p>
                                    Spend some time getting your home move-in ready in a way that will appeal to the broadest range of potential buyers. In today’s market, most agents will advise a you to invest in a fresh coat of paint (usually white or neutral shades) and/or, if it makes sense, making kitchen or bath improvements that will will help to fetch the best price for your property.  It's important to weigh upgrades with price, this can be a delicate balance, so make careful choices.
                                </p>
                                <br />
                                <p>
                                    Finding the right listing price for your home is one of the most important factors in a successful home sale. Homes that are accurately priced are more likely to sell in a timely manner. Be sure to understand the comparable sales in your area before deciding on a price.  A home that is over priced can quickly fall in value if it sits on the market for too long.  Understanding your property’s value will also allow you to make smart decisions going forward.
                                </p>

                                <ul>
                                    <li className="resource">Choosing between hiring an agent and FSBO:
                                        <a className="res-link" href="https://www.investopedia.com/articles/personal-finance/071514/8-reasons-not-sell-your-home-without-agent.asp" target="_blank" rel="noreferrer">SHOULD YOU HIRE AN AGENT?</a>
                                    </li>

                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>


                    <Card className="color accordian-header">
                        <Accordion.Toggle className="accordian-header" as={Card.Header} eventKey="3">
                            REAL ESTATE AGENTS AND BROKERS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="new-color">
                                <p>
                                    Agents and brokers embody the pulse of the real estate industry.  Depending upon the state in which you work, there are different licensing and continuing education requirements that are important to keep up with.  Here are some CA resources, and updates to keep your business running smoothly:
                            </p>
                                <ul>

                                    <li className="resource">California Regional MLS Service:
                                        <a className="res-link" href="https://go.crmls.org/solutions/" target="_blank" rel="noreferrer">CRMLS</a>
                                    </li>
                                    <li className="resource"></li>
                                    <li className="resource">Licensing and Continuing Education and Requirements:
                                        <a className="res-link" href="https://www.dre.ca.gov/" target="_blank" rel="noreferrer">DEPARTMENT OF REAL ESTATE</a>
                                    </li>
                                    <li className="resource"></li>
                                    <li className="resource">Important information about showing during the pandemic:
                                        <a className="res-link" href="https://www.car.org/aboutus/mediacenter/news/covidnewformsapril" target="_blank" rel="noreferrer">CALIFORNIA ASSOC OF REALTORS</a>
                                    </li>

                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="color accordian-header">
                        <Accordion.Toggle className="accordian-header" as={Card.Header} eventKey="4">
                            DESIGNERS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="new-color">
                                <p>
                                    Designers bring style and creativity to spaces that can turn a property into a home!  Here are some of our favorite resources for our interior designers and other creatives:
                            </p>
                                <ul>
                                    <li className="resource"></li>
                                    <li className="resource">
                                        <a className="res-link" href="https://www.architecturaldigest.com/gallery/interior-designers-share-their-go-to-websites-for-home-shopping" target="_blank" rel="noreferrer">Architectural Digest</a>
                                    </li>
                                    <li className="resource">
                                        <a className="res-link" href="https://www.interiordesign.net/" target="_blank" rel="noreferrer">Interior Design Inspiration</a>
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
                    <Card className="accordian-header color">
                        <Accordion.Toggle className="accordian-header" as={Card.Header} eventKey="5">
                            DEVELOPERS AND CONTRACTORS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body className="new-color">
                                <p>
                                    There are some incredible contractors and developers working in Southern California.  If you are a builder, check out these resources to make sure you are following trends and staying apace with new workflows. Our architechtural community is one of the most experimental and diverse in the world!
                            </p>
                                <ul>
                                    <li className="resource"></li>
                                    <li className="resource">
                                        <a className="res-link" href="https://www.nahb.org/" target="_blank" rel="noreferrer">NATIONAL ASSOC. of HOME BUILDERS</a>
                                    </li>
                                    <li className="resource"></li>
                                    <li className="resource">
                                        <a className="res-link" href="https://creativeoverflow.net/southern-californias-signature-architectural-styles/" target="_blank" rel="noreferrer">CREATIVE OVERFLOW</a>
                                    </li>
                                    <li className="resource"></li>
                                    <li className="resource">
                                        <a className="res-link" href="https://labusinessjournal.com/news/real-estate/" target="_blank" rel="noreferrer">LOS ANGELES BUSINESS JOURNAL</a>
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