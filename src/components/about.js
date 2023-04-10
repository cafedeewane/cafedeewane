import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import "../styles/about.css";

function About() {
  return (
    <Container fluid className="about--section">
      <Row>
        <Col xs={12} sm={12} lg={7}>
          <Image fluid src={require("../assets/about-main.png")} className="about-main" />
        </Col>
        <Col xs={12} sm={12} lg={5} className="about-content-section">
        <h1 className="about-content-heading"> All About Cafe Deewane</h1>
        <p className="about-content">
          Here at Cafe Deewane, ‘we rule the taste’ Flavours and spices blended
          just the way you like it… Unleash your love for burgers… After all!! “
          There is fun in the bun but not the frozen one” (You get the freshly
          made patties) And guess what! Our cheesy range of pastas will melt to
          finally have a cheat meal… Trust ours ‘wraps’ and ‘Drinks’, they are
          said to be the perfect binge watching partner… You know, it is said by
          Jo Brand, anything is good if it is made of chocolate… and what better
          than a waffle, not just a waffle but truly a delicacy… find yourself
          having a bite of chocolate waffle, topped with whipped cream,
          chocolate syrup and choco chips. Okay!! There is a lot in the bucket…
          you gotta scroll down ! From house parties to the ‘Me-time’, ‘Cafe
          Deewane’ got your appetite sorted… Our Deewangi for making the best
          recipes set benchmarks…
        </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
