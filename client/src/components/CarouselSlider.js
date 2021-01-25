import React from "react";
import { Carousel, Card, Button } from 'react-bootstrap'
import '../styling/CarouselSlider.css';
import LoginPhoto from "../images/12.png";
import LoginPhoto1 from "../images/13.png";
import LoginPhoto2 from "../images/14.png";
import LoginPhoto3 from "../images/15.png";

const CarouselSlider = () => {
    return (
<Carousel>
  <Carousel.Item interval={200}>
    <img
      className="d-block w-100"   alt="Third slide"
      src={LoginPhoto} />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={200}>
    <img
      className="d-block w-100"   alt="Third slide"
      src={LoginPhoto1} />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={200}>
    <img
      className="d-block w-100"   alt="Third slide"
      src={LoginPhoto2} />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-block w-100"   alt="Third slide"
    src={LoginPhoto3} />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
};

export default CarouselSlider;