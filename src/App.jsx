import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div style={{ backgroundColor: '#2E8B57', minHeight: '100vh' }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Personal Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="outline-primary">Home</Button>{' '}
              <Button variant="outline-success">About</Button>{' '}
              <Button variant="outline-warning">Education</Button>{' '}
              <Button variant="outline-danger">Hobbies</Button>{' '}
              <Button variant="outline-info">Contact</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </div>
  );
}

export default App;
