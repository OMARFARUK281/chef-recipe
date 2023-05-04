import React from "react";
import Header from "../pages/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/RightNav/RightNav";
import Chef from "../pages/Chef/Chef";
import ChefList from "../pages/ChefList/ChefList";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={2}>
            <ChefList></ChefList>
          </Col>
          <Col lg={6}>
            <Chef></Chef>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
