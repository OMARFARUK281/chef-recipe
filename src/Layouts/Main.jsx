import React from "react";
import Header from "../pages/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/RightNav/RightNav";
import ChefList from "../pages/ChefList/ChefList";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={2}>
            <ChefList></ChefList>
          </Col>
          <Col lg={8}>
            <Outlet></Outlet>
          </Col>
          <Col lg={2}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
