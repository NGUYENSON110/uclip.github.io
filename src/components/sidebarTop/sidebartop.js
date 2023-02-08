import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


function sidebartopMoblie() {
  return (
    <div>
      <Navbar fixed="top" style={{ backgroundColor: '#2DB742' }} >
        <Container style={{ backgroundColor: '#2DB742' }} >
          <Nav  style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
            <div style={{marginTop: '5px'}}>
              <Navbar.Brand href="/" style={{ color: 'white' }}>Videos</Navbar.Brand>
            </div>
            <div style={{display:'flex'}}>
              <Nav.Link href="/"> <FiBell size={23} style={{ color: 'white' }} /></Nav.Link>
              <Nav.Link href="/"> <CiSearch size={25} style={{ color: 'white' }} /></Nav.Link>
            </div>

          </Nav>


        </Container>
      </Navbar>
    </div>
  )
}

export default sidebartopMoblie;