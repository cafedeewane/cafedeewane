import React from "react";
import "../styles/about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

function Story() {
  return (
    <Container fluid className="story--section">
      <Row>
        <Col lg={4} className="story-content-container">
        <h1 className="story-heading"> Story Behind the brand </h1>
        <p className="story-content">
          As an old adage says ‘In quite moments, we knew there had to be more…’
          The founders of Cafe Deewane- 2 successful engineers, sharing a Jai
          Veeru vibe are bringing creativity and taste together. This cafe
          brings a world of flavour perfectly churned with warmth. Starting from
          a small idea, more of a vision… their efforts are taking turns to very
          doorstep… Here, you not only unbox to relish the taste, but to cherish
          the mood too… 
          <br />
          Well! The journey has just begun…{" "}
        </p>
        </Col>
        <Col lg={8} className="story-image-col">
          <Image fluid src={require("../assets/yourstory1.png")} className='story-image' />
          <Image fluid src={require("../assets/yourstory2.png")} />
        </Col>
      </Row>
    </Container>
    // <div className="story--section">
    //   <div className="story-left-section">
    //     <h1 className="story-heading"> Story Behind the brand </h1>
    //     <p className="story-content">
    //       {" "}
    //       As an old adage says ‘In quite moments, we knew there had to be more…’
    //       The founders of Cafe Deewane- 2 successful engineers, sharing a Jai
    //       Veeru vibe are bringing creativity and taste together. This cafe
    //       brings a world of flavour perfectly churned with warmth. Starting from
    //       a small idea, more of a vision… their efforts are taking turns to very
    //       doorstep… Here, you not only unbox to relish the taste, but to cherish
    //       the mood too… 
    //       <br />
    //       Well! The journey has just begun…{" "}
    //     </p>
    //   </div>
    // </div>
  );
}

export default Story;
