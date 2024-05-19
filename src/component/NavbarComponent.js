import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"

function NavbarComponent() {
    const state = useSelector((state) => state.handleCart)

    return (
        <>
            {["xl"].map((expand) => (
                <Navbar key={expand} expand={expand} bg="light" className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/#"><h2> Super Shop <i class="fa-brands fa-shopify"></i></h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Super Shop
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="nav_card_left flex-grow-1 pe-3">
                                    <NavLink to="/" className='nav_left_buttons'>Home</NavLink>
                                    <NavLink to="/products" className=' nav_left_buttons'> Products</NavLink>
                                    <NavLink to="/#about" className=' nav_left_buttons'> About</NavLink>
                                    <NavLink to="#contact" className=' nav_left_buttons'> Contact</NavLink>
                                </Nav>
                                <Nav className="nav_card_right flex-grow-1 pe-3">
                                    <NavLink to="/login" className='nav_right_buttons'>
                                        <i className='fa fa-sign-in me-1'></i>Login
                                    </NavLink>
                                    <NavLink to="/register" className='nav_right_buttons'>
                                        <i className='fa fa-user-plus me-1'></i>Register
                                    </NavLink>
                                    <NavLink to="/cart" className='nav_right_buttons'>
                                        <i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})
                                    </NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))
            }
        </>
    )
}
export default NavbarComponent;
