import React, { useContext } from "react";
import { Button, Carousel, Container, Nav, Navbar } from "react-bootstrap";
import image1 from '../FoodImages/images/Burak Burak.jpg'
import image2 from '../FoodImages/images/arda_türkmen-2.jpg'
import image3 from '../FoodImages/images/foods-3.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const {user} = useContext(AuthContext);

  return (
      <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="fw-bold ms-5 text-danger">CHEFUS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
              
            <Nav>
            <Nav.Link href="#features">
                <Link className="text-decoration-none fw-bold" to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className="text-primary fw-bold" href="#pricing">Chef</Nav.Link>
             { user && <Nav.Link href="#deets">
                <FaRegUserCircle className="text-warning" style={{fontSize: '2rem'}}>
                </FaRegUserCircle></Nav.Link>}

              <Nav.Link eventKey={2} href="#memes">
               { user ? <Button className="fw-bold bg-primary" variant="secondary">Logout</Button>:
                <Link to="/login">
                <Button className="fw-bold bg-primary" variant="secondary">Login</Button>
                </Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>      
      </Navbar>

      <div>

    <Carousel slide={true}>
      <Carousel.Item>
        <img style={{height:'20rem'}} className="d-block w-100" src={image1} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'20rem'}} className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'20rem'}} className="d-block w-100" src={image3} alt="Third slide"  />

        <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>    
    </Container>
  );
};

export default Header;
