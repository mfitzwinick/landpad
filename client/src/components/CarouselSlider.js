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
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"   alt="Frist slide"
      src={LoginPhoto} />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"   alt="Second slide"
      src={LoginPhoto1} />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"   alt="Third slide"
      src={LoginPhoto2} />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-block w-100"   alt="Forth slide"
    src={LoginPhoto3} />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
};

export default CarouselSlider;