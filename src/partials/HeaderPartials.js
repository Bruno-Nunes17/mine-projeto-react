import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export const HeaderPartial = () =>{
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Loja de eletronicos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="position-relative" id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link position-absolute end-0" to='/cart'><BsCart/></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}