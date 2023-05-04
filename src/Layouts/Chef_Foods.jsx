import React from "react";
import Header from "../pages/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/ChefList/ChefList";
import RightNav from "../pages/RightNav/RightNav";

const Chef_Foods = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={8}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Chef_Foods;
