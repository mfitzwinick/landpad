import React from "react";
import { Carousel, Card, Button } from 'react-bootstrap'
import "../styling/login.css";
import LoginPhoto from "../images/1.png";


const CarouselSlider = () => {
    return (
<Carousel>
  <Carousel.Item interval={500}>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={LoginPhoto} />
  <Card.Body>
    <Card.Title>NEW NEW NEW</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"   alt="Third slide"
      src={LoginPhoto} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-block w-100"   alt="Third slide"
    src={LoginPhoto} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
};

export default CarouselSlider;