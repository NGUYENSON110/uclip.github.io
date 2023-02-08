import React from 'react'
import { HiHome, HiFire } from 'react-icons/hi';
import { BiNetworkChart } from "react-icons/bi";
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function sidebar() {

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <HiHome />
    },

    {
      path: "/popular",
      name: "Popular",
      icon: <BiNetworkChart />
    },

    {
      path: "/suggest",
      name: "Suggest",
      icon: <HiFire />
    },
  ]
  return (
    

    <Navbar bg="light" variant="pills" fixed="top" >
      {
        menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} activeclassName="active">
            <Container>
              {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
              <Nav>
                <Nav.Link href="#home">{item.icon}</Nav.Link>
              </Nav>
            </Container>
          </NavLink>
        ))
      }
    </Navbar>

  )
}

export default sidebar;