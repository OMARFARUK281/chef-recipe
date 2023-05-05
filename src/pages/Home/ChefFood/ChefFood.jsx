import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const ChefFood = ({ foods }) => {
  const { img, name, title, user } = foods;

  return (
    
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map(() => (
        <Col>
          <Card className="mb-4 p-2">
            <Card.Img className="w-100 rounded" variant="top" src={img} />
            <Card.Body>
              <Card.Text className="fs-1">{name}</Card.Text>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
            <div className="d-flex text-warning ms-4 align-item-center">
             <Card.Img style={{width: '3rem'}} className="rounded-circle" src={user} />
              <div className="text-center ms-5">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              </div>             
            </div>

          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ChefFood;
