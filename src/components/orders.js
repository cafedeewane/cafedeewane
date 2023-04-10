import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import "../styles/about.css";

function Orders() {
  return (
    <Container fluid className="orders--section">
      <Row>
        <Col lg={3} className="order-col">
          <Image
            fluid
            src={require("../assets/wraps.webp")}
            className="order-image"
          />
          <h6 className="order-name"> WRAPS </h6>
        </Col>
        <Col lg={3} className="order-col">
          <Image
            fluid
            src={require("../assets/waffles-2.png")}
            className="mx-auto"
          />
          <h6 className="order-name"> WAFFLES </h6>
        </Col>
        <Col lg={3} className="order-col">
          <Image fluid src={require("../assets/beverages.png")} />
          <h6 className="order-name"> BEVERAGES </h6>
        </Col>
        <Col lg={3} className="order-col">
          <Image fluid src={require("../assets/sandwich.png")} />
          <h6 className="order-name"> SANDWICHES </h6>
        </Col>
        <Col lg={3} className="order-col">
          <Image fluid src={require("../assets/fries.png")} />
          <h6 className="order-name"> SANDWICHES </h6>
        </Col>
        <Col lg={3} className="order-col">
          <Image fluid src={require("../assets/pasta.png")} />
          <h6 className="order-name"> PASTA </h6>
        </Col>
        <Col lg={3} className="order-col">
          <Image fluid src={require("../assets/desserts.png")} />
          <h6 className="order-name"> DESERTS </h6>
        </Col>
        <Col lg={3} className="order-col">
          <Image fluid src={require("../assets/burgers.png")} />
          <h6 className="order-name"> BURGERS </h6>
        </Col>
      </Row>
      <Col xs={12} className="offers-container">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="offers-button">
            ORDERS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="https://cafedeewane.petpooja.com/orders/menu">Kharar</Dropdown.Item>
            <Dropdown.Item href="https://cafedeewanemohali.petpooja.com/menu">Mohali</Dropdown.Item>
            <Dropdown.Item href="https://cafedeewanechd.petpooja.com/menu">Chandigarh</Dropdown.Item>
            <Dropdown.Item href="https://cafedeewanezkr.petpooja.com/menu">Zirakpur</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <button className="offers-button">ORDERS</button> */}
      </Col>
    </Container>
  );
}

export default Orders