import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import logo from '../../images/1_YQgaKfVzK-YpxyT3NYqJAg.png';
import logo1 from '../../images/Full-Stack-Developer.jpg';
import logo2 from '../../images/top-100-course-pandemic.png';
import './Slider.css'

const Slider = () => {
  return (
    <div>
      <Container>
      <Carousel className='Slider'>
  <Carousel.Item interval={1000}>
    <img style={{height:'500px'}}
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:'500px'}}
      className="d-block w-100"
      src={logo1}
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'500px'}}
      className="d-block w-100"
      src={logo2}
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
    </div>
  );
};

export default Slider;