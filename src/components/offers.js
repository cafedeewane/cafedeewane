import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import "../styles/about.css";

function Offers() {
  return (
    <Container fluid className='offers--section'>
      <Col>
      <h1 className='offers-heading'> What We Offer </h1>
        <p className='offers-content'> Curious? Here are our most popular menu items. </p>
        <Row>
          <Col> 
            <Image fluid src={require("../assets/wraps.webp")} className='offer-image' />
            <h4 className='offer-text'>WRAPS</h4>
          </Col>
          <Col> 
            <Image fluid src={require("../assets/waffles.webp")} className='offer-image' />
            <h4 className='offer-text'>WAFFLES</h4>
          </Col>
          <Col> 
            <Image fluid src={require("../assets/wraps.webp")} className='offer-image' />
            <h4 className='offer-text'>DRINKS</h4>
          </Col>
        </Row>
        <button className='offers-button'> VIEW FULL MENU </button>
      </Col>
    </Container>
  )
}

export default Offers