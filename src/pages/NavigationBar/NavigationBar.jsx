import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      
    </Container>
  );
};

export default NavigationBar;
