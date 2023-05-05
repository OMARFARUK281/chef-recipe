import React from "react";
import Header from "../pages/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/RightNav/RightNav";
import ChefList from "../pages/ChefList/ChefList";

const Chef_Foods = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <ChefList></ChefList>
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
