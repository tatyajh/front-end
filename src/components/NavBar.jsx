import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Link to="/" className="navbar-brand">INICIO</Link>
                <Nav className="me-auto">
                    <Link to="/new" className="nav-link">NUEVO PEDIDO</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;