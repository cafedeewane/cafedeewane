import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import "../styles/landing.css";
import "../fonts/joshico.ttf";

function Landing() {
  return (
    <Container fluid className="landing--section">
      <Row>
        <Col xs={12} sm={12} lg={6} className="landing-left-section">
          <div className="landing-heading"> Cafe Deewane </div>
            <div className="landing-description">
              Let's Live our Deewangi for food together
            </div>
            <button className="order-button"> ORDER NOW </button>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <Image
            fluid
              src={require("../assets/landing.png")}
              className="landing-image"
            />
        </Col>
      </Row>
    </Container>  
  );
}

export default Landing;
