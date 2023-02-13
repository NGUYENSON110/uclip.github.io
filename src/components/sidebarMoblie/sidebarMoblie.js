import React, { useState, useEffect } from 'react';
import { HiHome, HiFire, HiBell, HiBookOpen } from 'react-icons/hi';
import { BiNetworkChart } from "react-icons/bi";
import './sidebarMoblie.css';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SidebarMoblie() {

    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <HiHome  size={25} />
        },

        {
            path: "/short",
            name: "short",
            icon: <BiNetworkChart  size={25} />
        },

        {
            path: "/suggest",
            name: "Suggest",
            icon: <HiFire  size={25}/>
        },

        {
            path: "/",
            name: "Suggest",
            icon: <HiBell  size={25}/>
        },

        {
            path: "/",
            name: "Suggest",
            icon: <HiBookOpen size={25} />
        },
    ]
    return (
        <Navbar bg="light" variant="light" fixed="bottom">
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} >
                        <Container className='nav-container'>
                            <Nav className="me-auto">
                                <Nav.Link href="/" className='icon' activeClassName="active" >{item.icon}</Nav.Link>
                            </Nav>
                        </Container>
                    </NavLink>
                ))
            }
        </Navbar>

    )
}
export default SidebarMoblie;