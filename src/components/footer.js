import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid className="footer--section">
      <Row>
        <Col className="footer-image" lg={6}>
          <Image
            fluid
            src={require("../assets/footer.png")}
            className="story-image"
          />
        </Col>
        <Col className="footer-content" lg={5}>
          <h4 className="footer-heading"> OPENING HOURS </h4>
          <p className="footer-content"> 12:00 pm to 06:00 am </p>
          <h4 className="footer-heading"> LOCATION </h4>
          <p className="footer-content">
            Chandigarh <br />
            Mohali
            <br />
            Zirakpur
            <br />
            Panchkula
            <br />
            Kharar
          </p>
          <h4 className="footer-heading"> FOLLOW US ON </h4>
          <p className="footer-content"> 12:00 pm to 06:00 am </p>
          <p className="footer-content">
            {" "}
            cafedeewane@gmail.com <br /> +91 9551700064{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
