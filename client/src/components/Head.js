import React from 'react';
import { Carousel } from 'react-bootstrap'
import car1 from './car1.png'
import car2 from './car2.png'

export  default class Head extends React.Component {
    render() {
        return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={car2}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={car1}
      alt="Third slide"
    />

  
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={c1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
        );
    }
}